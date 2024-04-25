import Button from "./Button";

export default function ActionButton ({
    //these are props
    children,
    className,
    dispatch,
    type,
    payload
})
{
    return (
        <Button 
            onClick={() => dispatch({ type: type, payload: payload})}
            className={className}
        >
            {children}
        </Button>
    );
}