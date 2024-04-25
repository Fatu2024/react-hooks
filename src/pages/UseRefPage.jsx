import Counter from "../components/Counter"
import Stopwatch from "../components/Stopwatch"
import ControlledForm from "../components/ControlledForm"
import UncontrolledForm from "../components/UncontrolledForm"

//make a functional component
export default function UseRefPage() {
    return (
        <>
        <h3>useRef counter example</h3>
        <Counter />
        <h3>useRef stopwatch example</h3>
        <Stopwatch />
        <h3>controlled form - using state</h3>
        <ControlledForm />
        <h3>uncontrolled form - using ref</h3>
        <UncontrolledForm />
        </>
    )
}