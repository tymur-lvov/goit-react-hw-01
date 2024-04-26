import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.table_head}>Type</th>
          <th className={s.table_head}>Amount</th>
          <th className={s.table_head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={s.table_row} key={item.id}>
            <td className={s.table_data}>{item.type}</td>
            <td className={s.table_data}>{item.amount}</td>
            <td className={s.table_data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
