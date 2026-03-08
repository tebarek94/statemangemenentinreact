import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";

/* ==============================
   Type Definitions
================================= */

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (id: number) => void;
  total: number;
}

/* ==============================
   Fake Product Data
================================= */

const products = [
  {
    id: 1,
    name: "Nike Air Shoes",
    price: 120,
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    name: "Apple Watch",
    price: 250,
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: 80,
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 60,
    image: "https://picsum.photos/200?4",
  },
];

/* ==============================
   Cart Context
================================= */

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};

/* ==============================
   Navbar
================================= */

const Navbar: FC<{ setPage: Dispatch<SetStateAction<string>> }> = ({
  setPage,
}) => {
  const { cart } = useCart();

  return (
    <div className="navbar">
      <h2 onClick={() => setPage("home")}>E-Shop</h2>

      <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
    </div>
  );
};

/* ==============================
   Product Card
================================= */

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

/* ==============================
   Home Page
================================= */

const Home = () => {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

/* ==============================
   Cart Page
================================= */

const CartPage: FC = () => {
  const { cart, removeItem, total } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} />

          <div>
            <h4>{item.name}</h4>
            <p>Qty: {item.quantity}</p>
          </div>

          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
};

/* ==============================
   Main App
================================= */

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <CartProvider>
      <style>{`

      body{
        font-family: Arial;
        margin:0;
        background:#f5f5f5;
      }

      .navbar{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:15px 40px;
        background:black;
        color:white;
      }

      .navbar button{
        background:white;
        border:none;
        padding:8px 15px;
        cursor:pointer;
      }

      .grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:20px;
        padding:40px;
      }

      .card{
        background:white;
        padding:20px;
        border-radius:10px;
        text-align:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
      }

      .card img{
        width:100%;
        height:150px;
        object-fit:cover;
      }

      .card button{
        margin-top:10px;
        padding:8px 15px;
        background:black;
        color:white;
        border:none;
        cursor:pointer;
      }

      .cart{
        padding:40px;
      }

      .cart-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:white;
        padding:15px;
        margin-bottom:10px;
        border-radius:8px;
      }

      .cart-item img{
        width:60px;
        height:60px;
        object-fit:cover;
      }

      .cart-item button{
        background:red;
        color:white;
        border:none;
        padding:6px 10px;
        cursor:pointer;
      }

      `}</style>

      <Navbar setPage={setPage} />

      {page === "home" ? <Home /> : <CartPage />}
    </CartProvider>
  );
}
