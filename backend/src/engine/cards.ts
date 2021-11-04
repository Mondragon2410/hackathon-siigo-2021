
export enum CardType {
    Person,
    Module,
    Error,
}

export interface ICard{
    id: number,
    name: string,
    type: CardType

}

export const AllCards : ICard[] = [
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