import { useEffect, useState } from "react";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import Button from "./Button";
import { useCartContext } from "../context/cart_context";
import { ADD_ITEM_TO_CART } from "../utils/actions";
import { Link } from "react-router-dom";

export default function CoursePageSidebarPopup({ data, position }) {
  const [isScrolled, setIsScrolled] = useState(window.scrollY);
  const [fixed, setFixed] = useState(false);
  const { cart, dispatch } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    dispatch({ type: ADD_ITEM_TO_CART, id: data.course.id });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolled([window.scrollY]);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    if (position) {
      if (isScrolled >= position) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  }, [isScrolled, position]);

  return (
    <div className="course-page-sidebar-popup mx-auto bg-primary hidden lg:block">
      <div
        className={`w-full pointer-events-none ${
          fixed ? "fixed top-4 z-30" : "absolute top-28"
        }`}
      >
        <div className="container flex justify-end mx-auto px-11">
          <div className="w-4/12 ps-8 ">
            <div
              key={fixed}
              className="shadow-md sidebar-popup pointer-events-auto"
            >
              <div
                className={`video-play cursor-pointer ${fixed ? "hidden" : ""}`}
              >
                <div className="relative border-white border">
                  <div className="absolute top-0 left-0 size-full flex items-center justify-center bg-gradient-to-b from-transparent to-slate-900 opacity-80"></div>
                  <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white rounded-b-full rounded-t-full size-16 flex items-center justify-center">
                    <PlayArrowSharpIcon sx={{ fontSize: "3rem" }} />
                  </div>
                  <img className="w-full" src={data.course.img} />
                </div>
              </div>
              <div className="details bg-white px-5 py-6 text-primary">
                <div className="price">
                  <span className="font-extrabold text-3xl tracking-tighter">
                    ₱{new Intl.NumberFormat().format(data.course.price)}
                  </span>
                </div>
                <div className="text-center mt-4">
                  {cart.includes(data.course.id) ? (
                    <Button
                      onClick={handleClick}
                      type="purple"
                      customClass={`${loading ? "opacity-50" : ""}`}
                    >
                      <Link
                        className="size-full p-3 flex items-center justify-center"
                        to="/cart"
                      >
                        {loading ? (
                          <span class="loader"></span>
                        ) : (
                          <span>Go to Cart</span>
                        )}
                      </Link>
                    </Button>
                  ) : (
                    <Button handleClick={handleClick} type="purple" customClass={'py-3'}>
                      Add to Cart
                    </Button>
                  )}
                  <Button type="border" customClass={"w-full mt-2"}>
                    Buy Now
                  </Button>
                  <div className="mt-2">
                    <span className="text-xs">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
