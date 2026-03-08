import { useCart } from "../context/CartContext";

export default function CartItem({ item }: { item: any }) {
  const { removeItem } = useCart();

  return (
    <div className="flex justify-between border p-4">
      <div>
        <h3>{item.name}</h3>
        <p>Qty: {item.quantity}</p>
      </div>

      <button onClick={() => removeItem(item.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
}
