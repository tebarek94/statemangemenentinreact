import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  cart: CartItem[];
  coupon: string | null;
  discount: number;
  shipping: number;

  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;

  applyCoupon: (code: string) => void;
  calculateShipping: () => void;

  getTotalItems: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      coupon: null,
      discount: 0,
      shipping: 0,

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQty: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),

      applyCoupon: (code) => {
        if (code === "SAVE10") {
          set({ coupon: code, discount: 0.1 });
        } else if (code === "SAVE20") {
          set({ coupon: code, discount: 0.2 });
        }
      },

      calculateShipping: () => {
        const subtotal = get().getSubtotal();
        if (subtotal > 100) {
          set({ shipping: 0 });
        } else {
          set({ shipping: 10 });
        }
      },

      getTotalItems: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),

      getDiscount: () => {
        const subtotal = get().getSubtotal();
        return subtotal * get().discount;
      },

      getTotalPrice: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const shipping = get().shipping;

        return subtotal - discount + shipping;
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
