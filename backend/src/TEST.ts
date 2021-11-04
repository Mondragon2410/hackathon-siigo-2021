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
}

