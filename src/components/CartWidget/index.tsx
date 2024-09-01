import useCart from "../../stores/CartStore";

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <h1>Your cart with {cart.length} items:</h1>
      <ul>
        {cart.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartWidget;
