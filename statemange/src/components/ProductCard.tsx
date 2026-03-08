import { useCart } from "../context/CartContext";
import type { Product } from "../types/product.ts";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} className="h-40 w-full object-cover" />

      <h2 className="font-bold mt-2">{product.name}</h2>

      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
