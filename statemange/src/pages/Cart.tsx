// import { useCartStore } from "../store/cartStore";

// const Cart = () => {
//   const {
//     cart,
//     increaseQty,
//     decreaseQty,
//     removeFromCart,
//     getSubtotal,
//     getTax,
//     getTotalPrice,
//   } = useCartStore();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Shopping Cart</h1>

//       {cart.map((item) => (
//         <div key={item.id} className="flex gap-4 border-b py-4">
//           <img src={item.image} className="w-20" />

//           <div className="flex-1">
//             <h2>{item.name}</h2>
//             <p>${item.price}</p>

//             <div className="flex gap-2 mt-2">
//               <button onClick={() => decreaseQty(item.id)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increaseQty(item.id)}>+</button>
//             </div>
//           </div>

//           <button
//             onClick={() => removeFromCart(item.id)}
//             className="text-red-500"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <div className="mt-6 space-y-2">
//         <p>Subtotal: ${getSubtotal().toFixed(2)}</p>
//         <p>Tax: ${getTax().toFixed(2)}</p>
//         <p className="text-xl font-bold">
//           Total: ${getTotalPrice().toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Cart;
