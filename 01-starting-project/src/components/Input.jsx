export default function Input({inputKey, name, type, value, onValueChanged}) {
    return <div>
        <label>{name}</label>
        <input
            required
            type={type}
            value={value}
            onChange={e => onValueChanged({
                key: inputKey,
                value: parseFloat(e.target.value)}
            )}
        />
    </div>
}