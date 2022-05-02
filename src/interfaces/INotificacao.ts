export enum TipoNotificacao{
    SUCESSSO,
    FALHA,
    ATENCAO
}

export interface INotificacao{
    titulo:string
    texto:string
    tipo: TipoNotificacao
    id: number
}