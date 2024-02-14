import { useCartContext } from "../context/cart_context";
import ShoppingCart from "../components/ShoppingCart";
import courses from "../data/courses";

export default function Cart() {
  const { cart } = useCartContext();
  const coursesInCart = courses.filter((item) => cart.includes(item.id));
  
  return(<div className="cart-page">
    <ShoppingCart data={coursesInCart} />
  </div>);
}