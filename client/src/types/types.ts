export interface IUser {
    id: string
    email: string
    token: string
}

export interface IUserData {
    email: string
    password: string
}

export interface IResponseUser {
    email: string | undefined
    id: string | undefined
    createdAt: string | undefined
    updatedAt: string | undefined
    password: string | undefined
}

export interface IResponseUserData {
    token: string
    user: IResponseUser
}

export interface ITransaction {
    amount: number
    createdAt: string
    updatedAt: string
    title: string
    type: string
    id: string
    category: ICategory
}

export interface ICategory {
    title: string
    id: string
    createdAt: string
    updatedAt: string
    transaction?: []
}

export interface IResponseTransactionLoader {
    categories: ICategory[]
    transactions: ITransaction[]
    totalIncome: number
    totalExpense: number
}