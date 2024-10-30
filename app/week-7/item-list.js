import Item from "./item";

export default function ItemList({ items }) {
  // style varibles
  let nameButtonStyle =
    "mt-10 px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500";
  let categoryButtonStyle =
    "mt-10 px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500";

  return (
    <div>
      <div>
        <button className={nameButtonStyle}>Sort by Name</button>
        <button className={categoryButtonStyle}>Sort by Category</button>
      </div>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
