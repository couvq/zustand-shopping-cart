import useCart from "../../stores/CartStore";

const items = ["iphone", "kindle", "apples", "oranges"];

const ItemStore = () => {
  const { addToCart } = useCart();
  return (
    <div
      style={{
        border: "2px solid red",
        marginTop: "2rem",
      }}
    >
      <h2>Here are the items available in the store:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemStore;
