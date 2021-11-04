import { OwnedCard as OwnedCard } from "./cards";

export const PLAYER_0 = 0;
export const PLAYER_1 = 1;
export const PLAYER_2 = 2;
export const PLAYER_3 = 3;

export const INIT_CARDS_FOR_PLAYER = 4;
export const MAX_NUMBER_OF_PLAYERS = 4;

export interface IPlayer {
    name: string
    table: OwnedCard[]
}

export const registerPlayer = (name: string): IPlayer => ({
    name,
    table: []
})

