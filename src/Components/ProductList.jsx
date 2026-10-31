
import { useContext } from "react";
import { CartContext } from "../Context/globalstore";

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
