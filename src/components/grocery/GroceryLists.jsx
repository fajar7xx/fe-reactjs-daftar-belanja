import PropTypes from "prop-types";
import GroceryItem from "./GroceryItem";
import { useState } from "react";

const GroceryLists = ({
  lists,
  onDeleteItem,
  onToggleItem,
  onClearAllItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // if (sortBy === "input") {
  //   sortedItems = lists;
  // }

  // if (sortBy === "name") {
  //   sortedItems = lists.slice().sort((a, b) => a.name.localeCompare(b.name));
  // }

  // if (sortBy === "checked") {
  //   sortedItems = lists.slice().sort((a, b) => a.checked - b.checked);
  // }

  switch (sortBy) {
    case "name":
      sortedItems = lists.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = lists.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = lists;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>

      <div className="actions">
        {/* untuk penggunaan arrow function pada ini. karena ada mengrimkan parmeter wajib seperti ni 
          ini juga untuk mengambil inputan
        */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearAllItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
};

GroceryLists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default GroceryLists;
