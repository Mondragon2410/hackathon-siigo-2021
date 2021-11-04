import { OwnedCard } from "./cards";
import { IHiddenCards } from "./hiddenCards";
import { IPlayer } from "./players";

type TMatch = {
    [key: string]: IMatch
}

export enum MatchStatus {
    InLobi,
    Started,
}

export enum MatchTurn {
    Turn_0,
    Turn_1,
    Turn_2,
    Turn_3,
}

export interface HoldCards {
    cards: OwnedCard[]
    holder: MatchTurn
}

export interface IMatch {
    players: IPlayer[],
    hiddenCards: IHiddenCards
    status: MatchStatus
    currentTurn: MatchTurn
    turnCounter: number,
    cardsOnHold: HoldCards
}

export let AllMatchs: TMatch = {}