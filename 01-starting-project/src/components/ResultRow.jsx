import {formatter} from "../util/investment.js";

export default function ResultRow(
    {
        year,
        investmentValue,
        interestPerYear,
        totalInterest,
        investedCapital
    }) {
    return <tr>
        <td>{year}</td>
        <td>{formatter.format(investmentValue)}</td>
        <td>{formatter.format(interestPerYear)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
    </tr>
}