import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateTransactionDto } from "./dto/create-transaction.dto"
import { UpdateTransactionDto } from "./dto/update-transaction.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Transaction } from "./entities/transaction.entity"
import { Repository } from "typeorm"

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>
    ) {}

    async create(createTransactionDto: CreateTransactionDto, id: string) {
        const newTransaction = {
            title: createTransactionDto.title,
            amount: createTransactionDto.amount,
            type: createTransactionDto.type,
            user: { id: id },
            category: { id: createTransactionDto.category.id }
        }
        if (!newTransaction) {
            throw new BadRequestException("Error in create transaction!")
        }
        console.log("newTransaction: ", newTransaction)
        return await this.transactionRepository.save(newTransaction)
    }

    async findAll(id: string) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id: id }
            },
            relations: {
                category: true
            },
            order: {
                createdAt: "DESC"
            }
        })
        if (!transactions) throw new NotFoundException(`Transaction of user id ${id} not found`)
        return transactions
    }

    async findOne(id: string) {
        const transaction = await this.transactionRepository.findOne({
            where: {
                id: id
            },
            relations: {
                user: true,
                category: true
            }
        })
        if (!transaction) throw new NotFoundException(`Transaction not found`)
        return transaction
    }

    async update(id: string, updateTransactionDto: UpdateTransactionDto) {
        const isExits = await this.transactionRepository.findOne({
            where: {
                id: id
            }
        })
        if (!isExits) {
            throw new NotFoundException("Transaction not found")
        }
        const result = await this.transactionRepository.update(id, updateTransactionDto)
        if (result.affected == 1)
            return {
                message: "Update Success"
            }
    }

    async remove(id: string) {
        const isExits = await this.transactionRepository.findOne({
            where: {
                id: id
            }
        })
        if (!isExits) {
            throw new NotFoundException("Transaction not found")
        }
        const result = await this.transactionRepository.delete(id)
        if (result.affected == 1)
            return {
                message: "Delete Success"
            }
    }

    async findAllWithPagination(id: string, page: number, limit: number) {
        // Get the total count of transactions for the user
        const totalCount = await this.transactionRepository.count({
            where: {
                user: { id }
            }
        })

        // Calculate total pages
        const totalPages = Math.ceil(totalCount / limit)

        // Get the transactions for the current page
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id }
            },
            relations: {
                category: true,
                user: true
            },
            order: {
                createdAt: "DESC"
            },
            take: limit,
            skip: (page - 1) * limit
        })

        // Return the transactions along with totalCount and totalPages
        return {
            totalCount,
            totalPages,
            transactions
        }
    }

    async findAllByType(id: string, type: string) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: { id },
                type
            }
        })
        const total = transactions.reduce((acc, obj) => acc + obj.amount, 0)
        return total
    }
}
