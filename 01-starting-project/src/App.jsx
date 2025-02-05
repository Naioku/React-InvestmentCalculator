import UserInput from "./components/UserInput";
import {useState} from "react";
import Result from "./components/Result.jsx";
import {calculateInvestmentResults} from "./util/investment.js";

const INITIAL_INPUT_VALUES = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

function App() {
    const [values, setValues] = useState(INITIAL_INPUT_VALUES);

    const isInputValid = values.duration > 0;

    function handleValueChanged({key, value}) {
        setValues(previousValues => {
            return {
                ...previousValues,
                [key]: value
            }
        })
    }

    const result = calculateInvestmentResults(values)

    return <>
        <UserInput values={values} onValueChanged={handleValueChanged} />
        {isInputValid && <Result id="result" data={result} />}
        {!isInputValid && <p className="center">Please enter the valid data for year.</p>}

    </>
}

export default App
