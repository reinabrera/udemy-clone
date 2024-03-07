import { useRef, useEffect, useState } from "react";
import { usePopupContext } from "../context/popup_context";
import Button from "./Button";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { ADD_ITEM_TO_CART } from "../utils/actions";


export default function PopupCourseList({ content }) {
  const { cart, dispatch } = useCartContext();
  const [ customStyle, setCustomStyle ] = useState(null);
  const popupRef = useRef(null);
  const { course, setCourse } = usePopupContext();
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    if (popupRef.current){
      setCustomStyle({
        top: content.y - popupRef.current.clientHeight - 15,
        left: content.x + ((content.width - popupRef.current.offsetWidth)/2),
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupRef.current, course])

  const handleMouseOver = () => {
    setCourse((prev) => {
      return { ...course, show: !prev.show };
    });
  };

  const handleClick = () => {
    setLoading(true);
    dispatch({ type: ADD_ITEM_TO_CART, id: content.id });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      style={customStyle}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      className="course-list-popup absolute text-primary z-50 pb-4 w-full max-w-md"
    >
      <div ref={popupRef} className="card bg-white p-6  border shadow-md">
        <span className="font-extrabold">What you'll learn</span>
        <ul className="mt-1">
          {course.what_you_will_learn.slice(0, 3).map((item, index) => {
            return (
              <li key={"course-" + course.id + "-learn-" + index } className={`flex ${index > 0 ? "mt-2" : ""}`}>
                <DoneIcon fontSize="small" />
                <span className="text-sm ms-2 leading-5">{item}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex mt-4">
          {cart.includes(content.id) ? (
            <Button type="purple" customClass={`${loading ? 'opacity-50' : ''}`}>
              <Link
                className="size-full p-3 flex items-center justify-center"
                to="/cart"
              >
                {loading ? 
                  <span class="loader"></span>
                 : 
                  <span>Go to Cart</span>
                }
                
              </Link>
            </Button>
          ) : (
            <Button handleClick={handleClick} type="purple">
              Add to Cart
            </Button>
          )}
          <button className="flex ms-2 flex-shrink-0 size-12 hover:bg-gray-200 items-center justify-center rounded-t-full rounded-b-full border-primary border">
            <FavoriteBorderOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
