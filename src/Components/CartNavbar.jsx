
import { useContext } from "react";
import { CartContext } from "../Context/globalstore";

export default function CartNavbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log("Cart Items:", totalItems);

  return (
    <nav>
      <h2>My Shopping Store</h2>
      <h3>Cart Items: {totalItems}</h3>
    </nav>
  );
}
