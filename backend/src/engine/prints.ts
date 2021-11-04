import { AllMatchs } from "./allMatchs";
import { AllCards, OwnedCard, ThrowedCard } from "./cards";
import { NUMBER_OF_PLAYERS } from "./players";
import { getNextPlayer } from "./turns";

export const currentPlayerName = (matchCode: string) => AllMatchs[matchCode].players[AllMatchs[matchCode].currentTurn].name
export const NextPlayerName = (matchCode: string) => AllMatchs[matchCode].players[getNextPlayer(matchCode)].name

export const printTurn = (matchCode: string) => {
    console.log("\n──────────────────────────────────────────────────────────────────────")
    console.log(`Turn of ${currentPlayerName(matchCode)} --- Turn number: ${AllMatchs[matchCode].turnCounter} \n`);

    for (let j = 0; j < NUMBER_OF_PLAYERS; j++) {
        console.log("Player", AllMatchs[matchCode].players[j].name)
        console.log(AllMatchs[matchCode].players[j].table);
    }
    console.log("──────────────────────────────────────────────────────────────────────\n")
}

export const printHiddenCarts = (matchCode: string) => {
    console.log(" ------- | Hidden cards |------------")
    console.log(AllMatchs[matchCode].hiddenCards)
    console.log(" -------------- | °°° |----------------\n")
}

export const printThrowSuspect = (matchCode: string, throwedCard: ThrowedCard, cardsInTheHandOfNextPlayer: OwnedCard[]) => {
    console.log(`\n${currentPlayerName(matchCode)} throwed the cards with index:`, throwedCard);
    cardsInTheHandOfNextPlayer.length > 0 ?
        console.log(`Cards in the hand of ${NextPlayerName(matchCode)}:`, cardsInTheHandOfNextPlayer) :
        console.log(`${NextPlayerName(matchCode)} does not have any of the cards thown by ${currentPlayerName(matchCode)}\n`);
}

export const printAllDeck = () => {
    console.log(" ------- | All cards |------------")
    console.log(AllCards)
    console.log(" -------------- | °°° |----------------\n")
}

export const printWon = (matchCode: string) => {
    console.log(`MATCH "${matchCode}" WON BY ${currentPlayerName(matchCode)}!!`)
}