import { createContext, useContext, useReducer, useEffect } from "react";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../utils/actions";

const CartContext = createContext();

function reducer(cart, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...cart, action.id]
    case REMOVE_ITEM_FROM_CART:
      return cart.filter((id) => {
        return id !== action.id;
      })
    default:
      break;
  }
}

export function CartProvider({children}) {
  const cartLocal = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(reducer, cartLocal);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return(
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}