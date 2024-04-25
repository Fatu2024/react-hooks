function TextInput ( { state, setState}) {
    //to see whats happening as i text
    // console.log(state);
    return (
        <input
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
        />
    )
}

export default TextInput;