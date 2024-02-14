import { createContext, useContext, useReducer, useEffect } from "react";
import { ADD_ITEM_TO_CART, LOAD_CART_FROM_LOCAL_STORAGE, REMOVE_ITEM_FROM_CART } from "../utils/actions";

const CartContext = createContext();

const initialState = [1001, 1002]

function reducer(cart, action) {
  let cartLocal = JSON.parse(localStorage.getItem("cart")) || [];

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      cartLocal.push(action.id);
      localStorage.setItem("cart", JSON.stringify(cartLocal));
      return [...cart, action.id]
    case REMOVE_ITEM_FROM_CART:
      const filtered = cartLocal.filter((item) => {
        return item !== action.id;
      });
      localStorage.setItem("cart", JSON.stringify(filtered));
      return cart.filter((id) => {
        return id !== action.id;
      })
    default:
      break;
  }
}

export function CartProvider({children}) {
  const cartLocal = JSON.parse(localStorage.getItem("cart"));
  const [cart, dispatch] = useReducer(reducer, cartLocal || []);
  console.log(cart);

  return(
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}