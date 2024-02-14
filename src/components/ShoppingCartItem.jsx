import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useCartContext } from "../context/cart_context";
import { REMOVE_ITEM_FROM_CART } from "../utils/actions";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function ShoppingCartItem({ data, setTotalPrice, index }) {
  const { dispatch } = useCartContext();

  useEffect(() => {
    setTotalPrice((prev) => prev + data.price);
  }, []);

  const handleClick = () => {
    setTotalPrice((prev => prev - data.price));
    dispatch({ type: REMOVE_ITEM_FROM_CART, id: data.id });
  };

  return (
    <li className={`relative cart-item ${index > 0 ? "mt-4" : ""}`}>
      <div className="flex -ms-4 *:ps-4 ">
        <div className="course-img w-24 sm:w-32">
          <img className="border" src={data.img} alt="course thumbnail" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div>
              <Link
                to={"/course/" + data.id}
                className="font-bold line-clamp-3 text-black stretched-link leading-5 md:leading-normal"
              >
                {data.title}
              </Link>
              <div className="flex">
                <span className="text-xs">By {data.instructor}</span>
              </div>
              <div className="rating-details flex flex-wrap -ms-1 *:ps-1 items-center mt-1">
                <span className="rating font-bold text-sm">
                  {data.ratings.stars}
                </span>
                <span className="stars flex items-center">
                  <Rating
                    value={data.ratings.stars}
                    precision={0.5}
                    readOnly={true}
                  />
                </span>
                <span className="count text-xs text-neutral-500">
                  ({data.ratings.count} ratings)
                </span>
              </div>
            </div>
            <div className="remove-button lg:text-end">
              <button
                onClick={handleClick}
                className="text-dark-purple hover:text-dark-purple-hover  relative z-40 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="price w-24 text-end">
          <span className="font-bold text-purple tracking-tighter">
            ₱{new Intl.NumberFormat().format(data.price)} <LocalOfferIcon sx={{fontSize: '1rem', margin: '-4px 0 0 2px'}} />
          </span>
        </div>
      </div>
    </li>
  );
}
