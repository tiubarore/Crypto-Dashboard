const FilterInput = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Coin.."
      />
    </div>
  );
};
export default FilterInput;
