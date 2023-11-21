export interface InfoMessage{
    id: number,
    messsage: string,
    duration: number
    type: TypeInfoMessage
}

export enum TypeInfoMessage{
    success = 'success',
    error = 'error'
}