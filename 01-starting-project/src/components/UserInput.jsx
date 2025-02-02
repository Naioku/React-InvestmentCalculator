import Input from "./Input.jsx";

export default function UserInput({values, onValueChanged}) {
    return <div id="user-input">
        <div className="input-group">
            <Input
                inputKey="initialInvestment"
                name="Initial investment"
                type="number"
                value={values.initialInvestment}
                onValueChanged={item => onValueChanged(item)}
            />
            <Input
                inputKey="annualValue"
                name="Annual investment"
                type="number"
                value={values.annualValue}
                onValueChanged={item => onValueChanged(item)}
            />
        </div>
        <div className="input-group">
            <Input
                inputKey="expectedReturn"
                name="Expected return"
                type="number"
                value={values.expectedReturn}
                onValueChanged={item => onValueChanged(item)}
            />
            <Input
                inputKey="duration"
                name="Duration"
                type="number"
                value={values.duration}
                onValueChanged={item => onValueChanged(item)}
            />
        </div>
    </div>
}