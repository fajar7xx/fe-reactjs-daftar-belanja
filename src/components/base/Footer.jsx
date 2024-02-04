const Footer = ({ items }) => {
  const totalItems = items.length;
  const totalCheckedItems = items.filter((item) => item.checked).length;
  const percentageItems = Math.round((totalCheckedItems / totalItems) * 100);

  return (
    <>
      <footer className="stats">
        {items.length > 0
          ? `Ada ${totalItems} barang di daftar belanjaan, ${totalCheckedItems} barang
          sudah dibeli (${percentageItems}%)`
          : `belanjaan kosong`}
      </footer>
    </>
  );
};

export default Footer;
