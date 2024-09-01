import { create } from "zustand";

type CartStates = {
  cart: string[];
};

type CartActions = {
  addToCart: (item: string) => void;
};

const useCartStore = create<CartStates & CartActions>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));

const useCart = () => {
  const { cart } = useCartStore();
  return { cart };
};

export default useCart;
