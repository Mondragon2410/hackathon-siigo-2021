import { AllMatchs } from "./allMatchs";
import { ThrowedCard } from "./cards";
import { nextTurn } from "./turns";
import { matchWon } from "./won";

export const throwAccusation = (matchCode: string, throwedCard: ThrowedCard): void => {

    const won =
        AllMatchs[matchCode].hiddenCards.HiddenPerson.id === throwedCard.Person &&
        AllMatchs[matchCode].hiddenCards.HiddenModule.id === throwedCard.Module &&
        AllMatchs[matchCode].hiddenCards.HiddenError.id === throwedCard.Error

    console.log(won,AllMatchs[matchCode].hiddenCards.HiddenPerson.name)

    if (won) {
        matchWon(matchCode)
        return;
    }

    nextTurn(matchCode);
}