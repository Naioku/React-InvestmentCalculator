import UserInput from "./components/UserInput";
import {useState} from "react";

const INITIAL_INPUT_VALUES = {
    initialInvestment: 0,
    annualValue: 0,
    expectedReturn: 0,
    duration: 0
}

function App() {
    const [values, setValues] = useState(INITIAL_INPUT_VALUES);

    function handleValueChanged({key, value}) {
        setValues(previousValues => {
            return {
                ...previousValues,
                [key]: value
            }
        })
    }

    return <>
        <UserInput values={values} onValueChanged={handleValueChanged} />
        <p>{values.initialInvestment}</p>
        <p>{values.annualValue}</p>
        <p>{values.expectedReturn}</p>
        <p>{values.duration}</p>
        <p>TABLE</p>
    </>
}

export default App
