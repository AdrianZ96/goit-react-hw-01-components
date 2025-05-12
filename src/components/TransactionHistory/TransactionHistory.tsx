import Items from './transactions.json'
import './transaction.css'

export const TransactionHistory = () => {

    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        
        {Items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
        ))}
      </tbody>
    </table>
  
    )
}
