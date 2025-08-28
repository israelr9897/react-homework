export default function ButtonShow({ showResults, amount }: any) {
  return showResults && <div className="amount">{amount}</div>;
}
