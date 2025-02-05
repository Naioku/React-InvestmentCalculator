import ResultRow from "./ResultRow.jsx";

export default function Result({data, ...props}) {
    return <table {...props}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {data.map(row => <ResultRow {...row} />)}
        </tbody>
    </table>
}