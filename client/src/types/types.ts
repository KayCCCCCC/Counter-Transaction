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