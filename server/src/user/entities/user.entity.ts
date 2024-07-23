import { Category } from "src/category/entities/category.entity"
import { Transaction } from "src/transaction/entities/transaction.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm"

@Entity()
@Unique(["email"]) // Đảm bảo email là unique
export class User {
    @PrimaryGeneratedColumn("uuid", { name: "user_id" }) // Sử dụng UUID thay cho số nguyên
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Category, (category) => category.user, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    categories: Category[]

    @OneToMany(() => Transaction, (transaction) => transaction.user, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    transactions: Transaction[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
