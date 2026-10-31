
import CartProvider from "./Context/CartProvider";
import CartNavbar from "./Components/CartNavbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

export default function CartDemo() {
  return (
    <CartProvider>
      <CartNavbar />
      <ProductList />
      <Cart />
    </CartProvider>
  );
}
