import { useState } from "react"
import ActionButton from "./ActionButton"
import NumberInput from "./NumberInput";


export default function PartyMember ( {member, dispatch}) {
    const [step, setStep] = useState(1);
    const r = (100 - member.health / 100) * 200;
    const g = (member.health * 200) / 100;

    return (
        <>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '0px'}}>
            {/* <b></b> makes it bold */}
            <b>{member.name}</b>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px'}}>
            <small
                style={{ fontSize: '12px', color: 'red', cursor: 'pointer'}}
                onClick={() => {
                    if (
                        window.confirm(
                            `are you sure you want to remove ${member.name} from your party?`
                        )
                    ) {
                        dispatch({
                            type: 'remove_adventurer',
                            payload: {
                                name: member.name
                        }
                        })
                    }
                }}
            >
                remove {member.name} from party
            </small>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginBottom: '5px'}}>
            health: {' '}
            <span style={{ color: `rgb(${r}, ${g}, 0)`}}> {member.health} %</span>
        </div>

        <div style={{ width: '100%', textAlign: 'cengter', marginBottom: '25px'}}>
            <ActionButton
                type='decrement_health'
                payload={{name: member.name, step}}
                dispatch={dispatch}
                className='one-character'
            >
                -
            </ActionButton>

            <NumberInput state={step} setState={setStep} />

            <ActionButton
                type='increment_health'
                payload={{name: member.name, step}}
                dispatch={dispatch}
                className='one-character'
            >
                +
            </ActionButton>
        </div>
        </>
    )
}