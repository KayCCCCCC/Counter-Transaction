import { Category } from "src/category/entities/category.entity"
import { User } from "src/user/entities/user.entity"
import {
    Column,
    CreateDateColumn,
    Entity,
    IsNull,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn("uuid", { name: "transaction_id" })
    id: string

    @Column()
    title: string

    @Column({ nullable: true })
    type: string

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn({ name: "user_id" })
    user: User

    @ManyToOne(() => Category, (category) => category.transactions, { onDelete: "SET NULL" })
    @JoinColumn({ name: "category_id" })
    category: Category

    @Column()
    amount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
