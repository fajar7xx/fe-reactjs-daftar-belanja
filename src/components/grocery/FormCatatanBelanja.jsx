import { useState } from "react";

const FormCatatanBelanja = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [qtyItem, setQtyItem] = useState(1);

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(itemName);

    // guard clause
    if (!itemName) return;

    const newItem = {
      name: itemName,
      quantity: qtyItem,
      checked: false,
      id: Date.now(), // hanya untuk simulasikan
    };

    console.table(newItem);
    // lifting state up seperti ini caranya
    // props onAddItem itiu  dari parentcomponent
    onAddItem(newItem);

    setItemName("");
    setQtyItem(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select
            value={qtyItem}
            onChange={(e) => setQtyItem(Number(e.target.value))}
          >
            {quantityNum}
          </select>
          <input
            type="text"
            placeholder="nama barang..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <button>Tambah</button>
      </form>
    </>
  );
};

export default FormCatatanBelanja;
