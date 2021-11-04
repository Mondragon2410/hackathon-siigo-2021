export interface IPlayer {
    id: number
    table: IPlayerTableElement[]
}

export interface IPlayerTableElement{
    cardIndex: number
    ownerId: number
}


