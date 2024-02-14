import { Link } from "react-router-dom";
import { usePopupContext } from "../context/popup_context";
import { useState } from "react";
import Button from "./Button";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import { useCartContext } from "../context/cart_context";
import { ADD_ITEM_TO_CART } from "../utils/actions";

export default function PopupCourse({ content }) {
  const { course, setCourse } = usePopupContext();
  const { cart, dispatch } = useCartContext();
  const [ loading, setLoading ] = useState(false);

  const desktopMaxContainerWidth = 1340;
  let arrow;
  const xPosition = () => {
    if (course.x + course.width >= desktopMaxContainerWidth) {
      arrow = "right";
      return { right: document.body.clientWidth - course.x };
    } else {
      arrow = "left";
      return { left: course.x + course.width };
    }
  };

  const customStyle = {
    top: course.y + document.documentElement.scrollTop - 200,
    ...xPosition(),
  };

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
      key={content.id}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      className={`popup-course z-50 absolute w-full max-w-96 ${arrow}`}
    >
      <div className="bg-white shadow-lg border p-6 border-gray-300">
        <Link
          to={"/course/" + content.id}
          className="font-extrabold text-xl leading-3 text-primary hover:text-secondary"
        >
          {content.title}
        </Link>
        <div>
          <span className="text-xs text-green">{content.lastUpdated}</span>
        </div>
        <p className="text-sm">{content.description}</p>
        <ul className="mt-2">
          {content.what_you_will_learn.slice(0, 3).map((item, index) => {
            return (
              <li
                key={"popup-learn-item-" + index}
                className={`li-w-check flex ${index > 0 && "mt-1"}`}
              >
                <DoneIcon fontSize="small" />
                <span className="ms-3 text-sm leading-5">{item}</span>
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
                  <span className="loader"></span>
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
