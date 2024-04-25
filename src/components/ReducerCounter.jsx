import { useReducer, useState } from "react";

//this is the reducer function that describes how the state gets updated
function reducer (state, action) {
    //each action type is a different way to modify the state
    switch(action.type) {
        case "increment" : {
            //return state + 1;
            //this is demonstrating how we could use payload instead of the + 1
            return state + action.payload.step;
        }
        case "decrement" : {
            //return state - 1;
            return state - action.payload.step;
        }
        case "reset" : {
            return 0;
        }
        default: {
            throw Error('unknown action: ' + action.type);
        }
    }
}

export default function ReducerCounter () {
    //count is state, so when i update count i will re-render.
    //dispatch is a function that we can invoke.
    //reducer describes how the state gets updated based on the action.
    const [count, dispatch] = useReducer(reducer, 0);

    //this is an extension that shows us how payload works
    const [step, setStep] = useState(1);

    return (
        <div>
            <h1>{count}</h1>
            <ActionButton type='increment' payload={{ step: step}} dispatch={dispatch}>increment</ActionButton>
            <ActionButton type='decrement' payload={{ step: step}} dispatch={dispatch}>decrement</ActionButton>
            <ActionButton type='reset' dispatch={dispatch}>reset</ActionButton>
            <br/>
            < NumberInput state={step} setState={setStep} />


        </div>
    )
}


//normally this would be in a different file but to demonstrate how they all interact, we put them together.
//payload will be demonstrated in the expansions of this example:
//start with the action button
function ActionButton ({ children, dispatch, type, payload }) {
    //children are the increment and decrement strings that are visible to the user on the button
    // console.log(children);
    return (
        <button onClick={() => dispatch({ type: type, payload: payload})}>
            {children}
        </button>
    )
}

function NumberInput ({ state, setState }) {
    return (
        <input
            className="numberInput"
            type="number"
            step='1'
            value={state}
            onChange={(e) => setState(Number(e.target.value))}
        />
    )
}