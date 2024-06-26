import { useState, useReducer } from "react"
import TextInput from "./TextInput";
import PartyMember from './PartyMember';
import partyReducer from '../reducers/partyReducer'
import ActionButton from "./ActionButton";
import './styles.css'

export default function AdventureParty() {
    const [name, setName] = useState('');
    const [party, dispatch] = useReducer(partyReducer, initialState);

    const partyList = party.map((member) => {
        return (
            <PartyMember key={member.name} member={member} dispatch={dispatch} />
        );
    });

    return (
        <>
            <h1>adventure party</h1>
            <div>
                add a new adventurer <br />
                <TextInput state={name} setState={setName} />
                <ActionButton 
                    type='add_adventurer'
                    payload={{name}}
                    dispatch={dispatch}
                >
                    add to party
                </ActionButton>
            </div>
            <div>
                <h2>party status</h2>
                { partyList }
            </div>
        </>
    )
}

const initialState = [
    { name: "Gandalf", health: 100 },
    { name: "Aragorn", health: 100 },
    { name: "Frodo", health: 100 },
    { name: "Sam", health: 100 },
    { name: "Pippin", health: 100 },
    { name: "Merry", health: 100 },
    { name: "Legolas", health: 100 },
    { name: "Gimli", health: 100 },
    { name: "Boromir", health: 100 }
];