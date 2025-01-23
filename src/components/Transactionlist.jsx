
const  Transactionlist = (props) =>{
    const {transactions = [],onDelete} = props;
    return(
        <div className="transaction-list">
            <h3>History</h3>
            <ul className="list">
            {transactions.map((transaction) => (
                    <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
                        <span>{transaction.title}</span>
                        <span> ₹{transaction.amount}</span>
                        <button onClick={()=>onDelete(transaction.id)} className="delete-bin">X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Transactionlist;