export interface Todo {

    readonly id: number,
    task: string,
    isCompleted: boolean,
    isDeleted: boolean,
    isFavorite: boolean,
    userId: number
}
