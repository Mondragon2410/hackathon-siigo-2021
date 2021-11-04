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

export interface IMatch {
    players: IPlayer[],
    hiddenCards: IHiddenCards
    status: MatchStatus
}

export let AllMatchs: TMatch = {}