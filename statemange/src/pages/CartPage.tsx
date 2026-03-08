import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, total } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2 className="mt-6 font-bold text-xl">Total: ${total}</h2>
    </div>
  );
}
