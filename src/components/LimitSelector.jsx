const LimitSelector = ({ limit, setLimit }) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="250">250</option>
      </select>
    </div>
  );
};
export default LimitSelector;
