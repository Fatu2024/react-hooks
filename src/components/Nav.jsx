import { Link } from "react-router-dom";


export default function Nav () {
    return (
        <div className="nav">
            <Link to='/'>
            <div>welcome</div>
            </Link>

            <Link to='/useref'>
                <div>useRef example</div>
            </Link>

            <Link to='/usereducer'>
                <div>useReducer example</div>
            </Link>

            <Link to='/usecontext'>
                <div>useContext example</div>
            </Link>
        </div>
    )
}