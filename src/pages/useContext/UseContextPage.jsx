import Headings from '../../components/Headings'
import DarkMode from "../../components/DarkMode"
import './styles.css';

export default function UseContextPage() {
    return (
        <>
            <h1>this is the DarkMode example of useContext</h1>
            <DarkMode />
            <br/>
            <h1>this is the headings useContext example</h1>
            <Headings />


        </>
    )
}