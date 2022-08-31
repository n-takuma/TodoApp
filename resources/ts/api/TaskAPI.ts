import axios from "axios"
import { Task } from "../types/Task"

const getTasks = async () => {
    const { data } = await axios.get<Task[]>('api/tasks')
    return data
}

const updateDoneTask = async ({ id, is_done }: Task) => {
    const { data } = await axios.patch<Task[]>(
        `/api/tasks/update-done/${id}`,
        { is_done: !is_done } //第2引数には送信するデータ
    )
    return data
}

const createTask = async (title: string) => {
    const { data } = await axios.post<Task>(
        `/api/tasks`,
        { title: title } //第2引数には送信するデータ
    )
    return data
}

const updateTask = async ({ id, task }: { id: number, task: Task}) => {
    const { data } = await axios.put<Task>(
        `/api/tasks/${id}`,
        task //第2引数には送信するデータ
    )
    return data
}

const deleteTask = async (id: number) => {
    const { data } = await axios.delete<Task>(
        `/api/tasks/${id}`,
    )
    return data
}

export {
    getTasks,
    updateDoneTask,
    createTask,
    updateTask,
    deleteTask
}