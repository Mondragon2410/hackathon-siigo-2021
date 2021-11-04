import { OwnedCard } from "./cards";
import { IHiddenCards } from "./hiddenCards";
import { IPlayer } from "./players";

type TMatch = {
    [key: string]: IMatch
}

export enum MatchStatus {
    InLobi,
    Turn_0,
    Turn_1,
    Turn_2,
    Turn_3,
}

export interface IMatch {
    players: IPlayer[],
    hiddenCards: IHiddenCards
    status: MatchStatus
}

export let AllMatchs: TMatch = {}