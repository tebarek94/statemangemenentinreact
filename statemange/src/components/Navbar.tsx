import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <Link to="/">E-Shop</Link>

      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}
