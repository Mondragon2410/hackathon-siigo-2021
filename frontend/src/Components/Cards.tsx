import { useState } from "react"
import { throwAccusation } from "../engine/acusation"
import { AllMatchs } from "../engine/allMatchs"
import { AllCards, OwnedCard } from "../engine/cards"
import { currentPlayerName } from "../engine/prints"
import { drawCardsAfterThrowSuspect, throwSuspect } from "../engine/suspect"
import { matchCode } from "../TEST"
import "./cards.css"

export const AllCardsComponent = () => {

    const sospechar = () => {
        console.log("Sospechando:", personaSeleccionada, moduloSeleccionado, errorSeleccionado)

        const A: number = parseInt(personaSeleccionada)
        const B: number = parseInt(moduloSeleccionado)
        const C: number = parseInt(errorSeleccionado)

        const xx = throwSuspect(matchCode, {
            Person: A,
            Module: B,
            Error: C
        })
        //console.log("AAA", xx)
        const mm = xx.map(x => x.cardIndex)
        console.log(mm)
        setPosiblesCartas(mm)
        setturno(currentPlayerName(matchCode))
        setjugadores(AllMatchs[matchCode].players)
    }

    const acusar = () => {
        console.log("Acusando:", personaSeleccionada, moduloSeleccionado, errorSeleccionado)

        const A: number = parseInt(personaSeleccionada)
        const B: number = parseInt(moduloSeleccionado)
        const C: number = parseInt(errorSeleccionado)

        throwAccusation(matchCode, {
            Person: A,
            Module: B,
            Error: C
        })

        setturno(currentPlayerName(matchCode))
        setjugadores(AllMatchs[matchCode].players)
    }

    const lanzarCarta = () => {
        const A: number = parseInt(indiceSeleccionado)
        drawCardsAfterThrowSuspect(matchCode, A);
        setturno(currentPlayerName(matchCode))
        setjugadores(AllMatchs[matchCode].players)
    }

    const [personaSeleccionada, setPersonaSeleccionada] = useState("")
    const [moduloSeleccionado, setModuloSeleccionado] = useState("")
    const [errorSeleccionado, setErrorSeleccionado] = useState("")
    const [indiceSeleccionado, setindiceSeleccionado] = useState("")

    const [turno, setturno] = useState(currentPlayerName(matchCode))
    const [jugadores, setjugadores] = useState(AllMatchs[matchCode].players)

    const [posiblesCartas, setPosiblesCartas] = useState([] as number[])

    return (
        <>
            <div className="container mt-5">
                <h1>Hidden cards</h1>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenPerson.id].type.toLowerCase()}`}>
                        ●{AllMatchs[matchCode].hiddenCards.HiddenPerson.id}-
                        {AllMatchs[matchCode].hiddenCards.HiddenPerson.name}
                    </h5>
                </div>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenModule.id].type.toLowerCase()}`}>
                        ●{AllMatchs[matchCode].hiddenCards.HiddenModule.id}-
                        {AllMatchs[matchCode].hiddenCards.HiddenModule.name}
                    </h5>
                </div>
                <div className="container">
                    <h5 className={`card-${AllCards[AllMatchs[matchCode].hiddenCards.HiddenError.id].type.toLowerCase()}`}>
                        ●{AllMatchs[matchCode].hiddenCards.HiddenError.id}-
                        {AllMatchs[matchCode].hiddenCards.HiddenError.name}
                    </h5>
                </div>
            </div>

            <div className="container player-container">
                {jugadores.map(player => (
                    <div className="container mt-5">
                        <PlayerName name={player.name} />
                        <Cards table={player.table} />
                    </div>
                ))}
            </div>

            <div className="container mt-5">
                <h1>Es el turno de: {turno} </h1>
            </div>
            <div className="container">
                <div className="player-action">
                    <label htmlFor="inputPassword2" className="sr-only">Cartas</label>
                    <input type="number" className="form-control ml-1" onChange={v => setPersonaSeleccionada(v.target.value)} placeholder="C1" />
                    <input type="number" className="form-control ml-1" onChange={v => setModuloSeleccionado(v.target.value)} placeholder="C2" />
                    <input type="number" className="form-control ml-1" onChange={v => setErrorSeleccionado(v.target.value)} placeholder="C3" />
                    <div className="container">

                        <button type="submit" className="btn btn-primary mb-2" onClick={sospechar}>Sospechar</button>
                        <button type="submit" className="btn btn-primary mb-2" onClick={acusar} >Acusar</button>
                    </div>
                </div>
            </div>


            <div className="container">
                <label htmlFor="inputPassword2" className="sr-only">Cartas</label>
                <input type="number" className="form-control ml-1" onChange={v => setindiceSeleccionado(v.target.value)} placeholder="C1" />
                <button type="submit" className="btn btn-primary mb-2" onClick={lanzarCarta} >Lanzar</button>
            </div>

            <div className="container">
                <div>Cartas: [</div>
                {posiblesCartas.map(x => (<> {x} </>))}
                <div>]</div>
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
                    ●{AllCards[card.cardIndex].id}-
                    {AllCards[card.cardIndex].name}
                </div>
            </h5>
        ))}
    </div>
)


