import { AllMatchs } from "./allMatchs";
import { OwnedCard, ThrowedCard } from "./cards";
import { printThrowSuspect, printTurn } from "./prints";
import { getNextPlayer, nextTurn } from "./turns";

export const throwSuspect = (matchCode: string, throwedCard: ThrowedCard): OwnedCard[] => {

    const cardsInTheHandOfNextPlayer: OwnedCard[] = AllMatchs[matchCode].players[getNextPlayer(matchCode)].table.filter(card =>
        card.cardIndex == throwedCard.Person ||
        card.cardIndex == throwedCard.Module ||
        card.cardIndex == throwedCard.Error
    )

    printThrowSuspect(matchCode, throwedCard, cardsInTheHandOfNextPlayer);

    if (cardsInTheHandOfNextPlayer.length == 0) {
        nextTurn(matchCode)
        printTurn(matchCode);
    } else {
        AllMatchs[matchCode].cardsOnHold = {
            cards: cardsInTheHandOfNextPlayer.map(i => i),
            holder: AllMatchs[matchCode].currentTurn
        }
    };


    return cardsInTheHandOfNextPlayer

}

export const drawCardsAfterThrowSuspect = (matchCode: string, newCardIndex: number) => {
    const holder = AllMatchs[matchCode].cardsOnHold.holder
    AllMatchs[matchCode].players[holder].table.push(AllMatchs[matchCode].cardsOnHold.cards[newCardIndex])
    printTurn(matchCode)
    nextTurn(matchCode);
}
