import { AllMatchs, MatchStatus, MatchTurn } from "./allMatchs";
import { CardType, ICard, shuffleCards } from "./cards";
import { EMPTY_HIDDEN_CARD, EMPTY_HIDDEN_CARDS } from "./hiddenCards";
import { CARDS_FOR_PLAYER, IPlayer, NUMBER_OF_PLAYERS } from "./players";
import { printAllDeck, printHiddenCarts, printThrowSuspect, printTurn } from "./prints";

export const getMatchCode = (): string => "test" //TODO 

export const createMatch = (player: IPlayer): string => {
    const matchCode = getMatchCode();
    AllMatchs[matchCode] = {
        players: [],
        hiddenCards: EMPTY_HIDDEN_CARDS,
        status: MatchStatus.InLobi,
        currentTurn: MatchTurn.Turn_0,
        turnCounter: 0,
        cardsOnHold: { holder: MatchTurn.Turn_0, cards: [] }
    }

    joinPlayer(matchCode, player)
    return matchCode;
}

export const joinPlayer = (matchCode: string, player: IPlayer): void => {
    AllMatchs[matchCode].players.push(player)
}

export const initMatch = (matchCode: string) => {

    let Deck: ICard[] = shuffleCards();

    //Find the cards selected for being hidden cards
    AllMatchs[matchCode].hiddenCards = {
        HiddenPerson: Deck.find(card => card.type === CardType.Person) || EMPTY_HIDDEN_CARD,
        HiddenModule: Deck.find(card => card.type === CardType.Module) || EMPTY_HIDDEN_CARD,
        HiddenError: Deck.find(card => card.type === CardType.Error) || EMPTY_HIDDEN_CARD,
    }

    //Remove hidden cards from deck
    Deck = Deck.filter(card =>
        card.id != AllMatchs[matchCode].hiddenCards.HiddenPerson.id &&
        card.id != AllMatchs[matchCode].hiddenCards.HiddenModule.id &&
        card.id != AllMatchs[matchCode].hiddenCards.HiddenError.id
    );

    //Repart cards for each player
    for (let j = 0; j < NUMBER_OF_PLAYERS; j++) {
        for (let i = 0; i < CARDS_FOR_PLAYER; i++) {
            AllMatchs[matchCode].players[j].table.push({
                cardIndex: Deck[j * CARDS_FOR_PLAYER + i].id,
                ownerId: j
            })
        }
    }

    setMatchStatus(matchCode, MatchStatus.Started);

    printAllDeck();
    printHiddenCarts(matchCode);
    printTurn(matchCode);

}

export const setMatchStatus = (matchCode: string, matchStatus: MatchStatus): void => {
    AllMatchs[matchCode].status = matchStatus;
}
