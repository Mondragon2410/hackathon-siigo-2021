
export enum CardType {
    Person = "Person",
    Module = "Module",
    Error = "Error",
}

export interface ICard {
    id: number,
    name: string,
    type: CardType

}

export interface OwnedCard {
    cardIndex: number
    ownerId: number
}

export interface ThrowedCard {
    Person: number
    Module: number
    Error: number
}

export const AllCards: ICard[] = [
    {
        id: 0,
        name: "Pedro",
        type: CardType.Person
    },
    {
        id: 1,
        name: "Juan",
        type: CardType.Person
    },
    {
        id: 2,
        name: "Carlos",
        type: CardType.Person
    },
    {
        id: 3,
        name: "Juanita",
        type: CardType.Person
    },
    {
        id: 4,
        name: "Antonio",
        type: CardType.Person
    },
    {
        id: 5,
        name: "Carolina",
        type: CardType.Person
    },
    {
        id: 6,
        name: "Manuel",
        type: CardType.Person
    },
    {
        id: 7,
        name: "Nomina",
        type: CardType.Module
    },
    {
        id: 8,
        name: "Facturacion",
        type: CardType.Module
    },
    {
        id: 9,
        name: "Recibos",
        type: CardType.Module
    },
    {
        id: 10,
        name: "Comprobante contable",
        type: CardType.Module
    },
    {
        id: 11,
        name: "Usuarios",
        type: CardType.Module
    },
    {
        id: 12,
        name: "Contabilidad",
        type: CardType.Module
    },
    {
        id: 13,
        name: "404",
        type: CardType.Error
    },
    {
        id: 14,
        name: "Stack overflow",
        type: CardType.Error
    },
    {
        id: 15,
        name: "Memory out of range",
        type: CardType.Error
    },
    {
        id: 16,
        name: "Null pointer",
        type: CardType.Error
    },
    {
        id: 17,
        name: "Syntax error",
        type: CardType.Error
    },
    {
        id: 18,
        name: "Encoding error",
        type: CardType.Error
    }

]

export const shuffleCards = (): ICard[] => {
    const shuffledCards: ICard[] = AllCards;
    let currentIndex = shuffledCards.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
            shuffledCards[randomIndex], shuffledCards[currentIndex]];
    }

    return shuffledCards;
}