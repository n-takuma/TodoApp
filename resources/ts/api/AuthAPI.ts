import axios from "axios"
import { User } from "../types/User"

const getUser = async () => {
    const { data } = await axios.get<User[]>('api/user')
    return data
}


const login = async ( {email, password} : { email: string, password: string}) => {
    const { data } = await axios.post<User>(
        `/api/login`, { email, password } //第2引数には送信するデータ
    )
    return data
}

const logout = async () => {
    const { data } = await axios.post<User>(`/api/logout`)
    return data
}

export {
    getUser,
    login,
    logout,
}