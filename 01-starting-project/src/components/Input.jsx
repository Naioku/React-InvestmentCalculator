export default function Input({inputKey, name, type, value, onValueChanged}) {
    return <div>
        <label>{name}</label>
        <input
            type={type}
            value={value}
            min={0}
            onChange={e => onValueChanged({
                key: inputKey,
                value: e.target.value}
            )}
        />
    </div>
}