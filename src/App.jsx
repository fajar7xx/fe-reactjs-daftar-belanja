import FormCatatanBelanja from "./components/grocery/FormCatatanBelanja";
import Header from "./components/base/Header";
import GroceryLists from "./components/grocery/GroceryLists";
import Footer from "./components/base/Footer";
import { useState } from "react";

const GroceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

const App = () => {
  const [items, setItems] = useState(GroceryItems);

  // ini di kirim ke onAddItem di child component
  const handleAddItem = (item) => {
    // konsep immutability. jangan menimpa array yang ada.
    // tetapi buat duplikat dari array sebelumnya lalu tambahkan array baru
    // set ke array yang tadi
    setItems([...items, item]);
  };

  const handleDeleteItem = (itemId) => {
    // immutability menghaurskan kita membuat array baru
    setItems((items) => items.filter((item) => item.id !== itemId));
  };

  const handleToggleItem = (itemId) => {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId
          ? {
              // spread operator js untuk object
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  const handleClearAllItems = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Header />

      <FormCatatanBelanja onAddItem={handleAddItem} />

      <GroceryLists
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAllItems={handleClearAllItems}
        lists={items}
      />

      <Footer items={items} />
    </div>
  );
};

export default App;
