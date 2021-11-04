import { useState } from "react"
import { AllMatchs } from "../engine/allMatchs"
import { AllCards, OwnedCard } from "../engine/cards"
import { currentPlayerName } from "../engine/prints"
import { matchCode } from "../TEST"
import "./cards.css"

export const AllCardsComponent = () => {

    const acusar = () => {
        console.log("Acusando:", personaSeleccionada, moduloSeleccionado, errorSeleccionado)
    }

    const [personaSeleccionada, setPersonaSeleccionada] = useState("")
    const [moduloSeleccionado, setModuloSeleccionado] = useState("")
    const [errorSeleccionado, setErrorSeleccionado] = useState("")

    return (
        <>
            <div className="container mt-5">
                <h1>Hidden cards</h1>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenPerson.id].type.toLowerCase()}`}>
                        ●{AllCards[AllMatchs[matchCode].hiddenCards.HiddenPerson.id].name}
                    </h5>
                </div>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenModule.id].type.toLowerCase()}`}>
                        ●{AllCards[AllMatchs[matchCode].hiddenCards.HiddenModule.id].name}
                    </h5>
                </div>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenError.id].type.toLowerCase()}`}>
                        ●{AllCards[AllMatchs[matchCode].hiddenCards.HiddenError.id].name}
                    </h5>
                </div>
            </div>

            <div className="container player-container">
                {AllMatchs[matchCode].players.map(player => (
                    <div className="container mt-5">
                        <PlayerName name={player.name} />
                        <Cards table={player.table} />
                    </div>
                ))}
            </div>

            <div className="container mt-5">
                <h1>
                    Es el turno de: {currentPlayerName(matchCode)}
                </h1>
            </div>
            <div className="container">

                <div className="player-action">
                    <label htmlFor="inputPassword2" className="sr-only">Cartas</label>
                    <input type="number" className="form-control ml-1" onChange={v => setPersonaSeleccionada(v.target.value)} placeholder="C1" />
                    <input type="number" className="form-control ml-1" onChange={v => setModuloSeleccionado(v.target.value)} placeholder="C2" />
                    <input type="number" className="form-control ml-1" onChange={v => setErrorSeleccionado(v.target.value)} placeholder="C3" />
                    <div className="container">

                        <button type="submit" className="btn btn-primary mb-2">Sospecha</button>
                        <button type="submit" className="btn btn-primary mb-2" onClick={acusar}>Acusación</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export interface PPlayerName {
    name: string
}
export const PlayerName = ({ name }: PPlayerName): JSX.Element => (

    <h1>
        {name}
    </h1>
)

export interface PCards {
    table: OwnedCard[]
}
export const Cards = ({ table }: PCards): JSX.Element => (
    <div className="container">
        {table.map(card => (
            <h5>
                <div className={`card-${AllCards[card.cardIndex].type.toLowerCase()}`}>
                    ●{AllCards[card.cardIndex].name}
                </div>
            </h5>
        ))}
    </div>
)


