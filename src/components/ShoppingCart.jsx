import { useState } from "react";
import { empty_shopping_cart } from "../assets/images";
import Button from "./Button";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart({ data }) {
  const [totalPrice, setTotalPrice] = useState(null);

  return (
    <div className="shopping-cart">
      <div className="2xl:container mx-auto py-6 md:py-10 px-6 lg:px-10">
        <div className="text-primary">
          <h1 className=" text-5xl font-bold hidden md:block">Shopping Cart</h1>
          <div className="md:mt-8">
            {data.length > 0 ? (
              <div className="flex flex-col md:flex-row -ms-16 *:ps-16">
                <div className="flex-1 order-2 md:-order-1 mt-6 md:mt-0">
                  <div className="cart-count">
                    <span className="text-base font-bold">
                      {data.length} Courses in Cart
                    </span>
                  </div>
                  <div className="border-t mt-1">
                    <ul className="shopping-cart-items mt-4">
                      {data.map((item, index) => {
                        return (
                          <ShoppingCartItem
                            key={"cart-item-" + item.id}
                            data={item}
                            setTotalPrice={setTotalPrice}
                            index={index}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="w-96">
                  <div className="pe-4 flex items-center md:block">
                    <span className="font-bold text-gray-500">Total:</span>
                    <div className="price md:mt-2 ms-2 md:ms-0">
                      <span className=" font-bold text-3xl tracking-tighter">
                        ₱{new Intl.NumberFormat().format(totalPrice)}
                      </span>
                    </div>
                    <Button
                      type="purple"
                      customClass={"w-full p-3 mt-4 hidden md:block"}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="cart-count">
                  <span className="text-base font-bold">
                    {data.length} Courses in Cart
                  </span>
                </div>
                <div className="border border-gray-100 rounded-sm flex flex-col items-center p-6 mt-2">
                  <div className="empty-cart-img">
                    <img src={empty_shopping_cart} alt="empty cart" />
                  </div>
                  <div className="text mt-6">
                    Your cart is empty. Keep shopping to find a course!
                  </div>
                  <div className="button mt-5">
                    <Button type="purple" customClass={"p-3"}>
                      Keep Shopping
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="shopping-cart-sticky bg-white fixed z-50 bottom-0 min-h-16 w-full z-10 shadow-[0_-1px_10px_0px_rgba(45,47,49,0.2)] px-4 py-2 block lg:hidden">
        <div className="details bg-white text-primary -ms-4 *:ps-4">
          <div className="text-center flex-1">
            <Button type="purple" customClass={"py-3"}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
