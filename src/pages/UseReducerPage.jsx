import ReducerCounter from "../components/ReducerCounter"
import AdventureParty from "../components/AdventureParty"

export default function UseReducerPage () {
    return (
        <>
        <h1>this is my counter example with useReducer</h1>
        <ReducerCounter />
        <h1>this is the adventure party example</h1>
        <AdventureParty />
        </>
    )
}