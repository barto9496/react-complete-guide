import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItemsToCart: () => { }
});

export default CartContext;