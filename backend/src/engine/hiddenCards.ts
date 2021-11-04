import { CardType, ICard } from "./cards";

export interface IHiddenCards {
    HiddenPerson: ICard
    HiddenModule: ICard
    HiddenError: ICard
}

export const EMPTY_HIDDEN_CARD: ICard = {
    id: 0,
    name: "",
    type: CardType.Person
}

export const EMPTY_HIDDEN_CARDS: IHiddenCards = {
    HiddenPerson: {
        id: 0,
        name: "",
        type: CardType.Person
    },
    HiddenModule: {
        id: 0,
        name: "",
        type: CardType.Module
    },
    HiddenError: {
        id: 0,
        name: "",
        type: CardType.Error
    }
}