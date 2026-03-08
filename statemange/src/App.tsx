// import { useCounterStore } from "./store/store";
// import "./App.css";
// // import CheckoutSummary from "./pages/CheckoutSummary";
// import CouponInput from "./components/CouponInput";

// function App() {
//   const count = useCounterStore((state) => state.count);

//   return (
//     <div className="app">
//       <OtherComponent count={count} />
//     </div>
//   );
// }
// const OtherComponent = ({ count }: { count: number }) => {
//   const increment = useCounterStore((state) => state.increment);
//   const decrement = useCounterStore((state) => state.decrement);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       {/* <CheckoutSummary /> */}
//       <CouponInput />
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Ecomar from "./Ecomar";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Ecomar />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
