import { OwnedCard } from "./engine/cards";
import { drawCardsAfterThrowSuspect, throwSuspect } from "./engine/suspect";
import { createMatch, initMatch, joinPlayer } from "./engine/match";
import { registerPlayer } from "./engine/players"

export const TEST = () => {

    const Player_Julian = registerPlayer("Julian");
    const Player_Sebastian = registerPlayer("Sebastian");
    const Player_Daniela = registerPlayer("Daniela");
    const Player_Angela = registerPlayer("Angela");

    const matchCode = createMatch(Player_Julian);

    joinPlayer(matchCode, Player_Sebastian)
    joinPlayer(matchCode, Player_Daniela)
    joinPlayer(matchCode, Player_Angela)

    initMatch(matchCode)

    const Asd: OwnedCard[] = throwSuspect(matchCode, {
        Error: 0,
        Module: 1,
        Person: 2,
    })

    const n = 0;
    if (Asd.length > 0) {
        drawCardsAfterThrowSuspect(matchCode, n)
    }
}

