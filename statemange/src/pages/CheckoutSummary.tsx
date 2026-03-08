import { useCartStore } from "../store/cartStore";

export default function CheckoutSummary() {
  const subtotal = useCartStore((state) => state.getSubtotal());
  const discount = useCartStore((state) => state.getDiscount());
  const shipping = useCartStore((state) => state.shipping);
  const total = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="p-6 border rounded-lg w-96">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Discount</span>
        <span>-${discount}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>${shipping}</span>
      </div>

      <div className="flex justify-between font-bold text-lg mt-4">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
}
