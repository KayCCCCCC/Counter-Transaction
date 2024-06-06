import { instance } from "../api/axios.api";
import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
    async registration(userData: IUserData): Promise<IResponseUserData | undefined> {
        const { data } = await instance.post<IResponseUserData>('user/register', userData)
        return data
    },
    async login(useData: IUserData): Promise<IUser | undefined> {
        const { data } = await instance.post<IUser>('auth/login', useData)
        return data
    },
    async getProfile(): Promise<IUser | undefined> {
        const { data } = await instance.get<IUser>('auth/profile')
        if (data) return data
    },

}