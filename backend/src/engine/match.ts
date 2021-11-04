import { AllMatchs, MatchStatus } from "./allMatchs";
import { CardType, ICard, shuffleCards } from "./cards";
import { EMPTY_HIDDEN_CARD, EMPTY_HIDDEN_CARDS } from "./hiddenCards";
import { INIT_CARDS_FOR_PLAYER as CARDS_FOR_PLAYER, IPlayer, MAX_NUMBER_OF_PLAYERS as NUMBER_OF_PLAYERS, PLAYER_0 } from "./players";

export let matchCode: string = "";

export const getMatchCode = (): string => "test" //TODO 

export const createMatch = (player: IPlayer): string => {
    matchCode = getMatchCode();

    AllMatchs[matchCode] = {
        players: [],
        hiddenCards: EMPTY_HIDDEN_CARDS,
        status: MatchStatus.InLobi
    }

    joinPlayer(matchCode, player)
    return matchCode;
}

export const joinPlayer = (matchCode: string, player: IPlayer) => {
    AllMatchs[matchCode].players.push(player)
}

export const initMatch = (matchCode: string) => {
    AllMatchs[matchCode].status = MatchStatus.Started;

    let Deck: ICard[] = shuffleCards();

    AllMatchs[matchCode].hiddenCards = {
        HiddenPerson: Deck.find(card => card.type === CardType.Person) || EMPTY_HIDDEN_CARD,
        HiddenModule: Deck.find(card => card.type === CardType.Module) || EMPTY_HIDDEN_CARD,
        HiddenError: Deck.find(card => card.type === CardType.Error) || EMPTY_HIDDEN_CARD,
    }

    Deck = Deck.filter(card =>
        card.id != AllMatchs[matchCode].hiddenCards.HiddenPerson.id &&
        card.id != AllMatchs[matchCode].hiddenCards.HiddenModule.id &&
        card.id != AllMatchs[matchCode].hiddenCards.HiddenError.id
    );

    for (let j = 0; j < NUMBER_OF_PLAYERS; j++) {
        for (let i = 0; i < CARDS_FOR_PLAYER; i++) {
            AllMatchs[matchCode].players[j].table.push({
                cardIndex: Deck[j * CARDS_FOR_PLAYER + i].id,
                ownerId: j
            })
        }
    }

    console.log(" ------- | Players |------------")
    for (let j = 0; j < NUMBER_OF_PLAYERS; j++) {
        console.log("Jugador", j)
        console.log(AllMatchs[matchCode].players[j].table);
    }
    
    console.log(" ------- | Hidden cards |------------")
    console.log(AllMatchs[matchCode].hiddenCards)


}


