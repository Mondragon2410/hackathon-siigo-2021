import { AllMatchs, MatchTurn } from "./allMatchs";

export const nextTurn = (matchCode: string) => {
    AllMatchs[matchCode].currentTurn = getNextPlayer(matchCode);
    AllMatchs[matchCode].turnCounter += 1;
}

export const getNextPlayer = (matchCode: string): MatchTurn => {
    switch (AllMatchs[matchCode].currentTurn) {
        case MatchTurn.Turn_0: return MatchTurn.Turn_1;
        case MatchTurn.Turn_1: return MatchTurn.Turn_2;
        case MatchTurn.Turn_2: return MatchTurn.Turn_3;
        default: return MatchTurn.Turn_0;
    }
}