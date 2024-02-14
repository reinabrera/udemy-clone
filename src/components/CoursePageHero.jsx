import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Rating from "@mui/material/Rating";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "./Button";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useCartContext } from "../context/cart_context";
import { ADD_ITEM_TO_CART } from "../utils/actions";

export default function CoursePageHero({ data, heroRef }) {
  const { cart, dispatch } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    dispatch({ type: ADD_ITEM_TO_CART, id: data.course.id });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="course-page-hero bg-white lg:bg-primary" ref={heroRef}>
      <div className="container mx-auto lg:px-11 py-4 lg:py-8">
        <div className="wrapper lg:w-8/12">
          <div className="breadcrumb px-6 md:px-0 text-secondary lg:text-light-purple text-sm font-bold">
            <Link to={"/courses/" + data.category.slug}>
              {data.category.name}
            </Link>
            <span className="text-primary lg:text-white mx-1">
              <ChevronRightIcon fontSize="small" />
            </span>
            <Link
              to={
                "/courses/" + data.category.slug + "/" + data.subcategory.slug
              }
            >
              {data.subcategory.name}
            </Link>
          </div>
          <div className="video-play cursor-pointer relative block lg:hidden mt-3 md:mt-10 mb-4">
            <div className="absolute top-0 left-1/2 -ms-[50vw] h-full w-[100vw] bg-primary"></div>
            <div className="relative">
              <div className="absolute top-0 left-0 size-full flex items-center justify-center bg-gradient-to-b from-transparent to-slate-900 opacity-80"></div>
              <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white rounded-b-full rounded-t-full size-16 flex items-center justify-center">
                <PlayArrowSharpIcon sx={{ fontSize: "3rem" }} />
              </div>
              <img className="w-full" src={data.course.img} />
            </div>
          </div>
          <div className="content px-6 lg:px-0 text-primary lg:text-white lg:mt-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-7 lg:leading-normal">
              {data.course.title}
            </h1>
            <p className="text-base lg:text-lg leading-6 lg:leading-7 mt-2 ">
              {data.course.description}
            </p>
            <div className="rating-details flex flex-wrap items-center mt-2 -ms-2 *:ps-2">
              <span className="rating font-bold text-sm">
                {data.course.ratings.stars}
              </span>
              <span className="stars -ms-1">
                <Rating
                  value={data.course.ratings?.stars}
                  precision={0.5}
                  readOnly={true}
                />
              </span>
              <span className="count text-sm text-secondary lg:text-light-purple underline">
                ({data.course.ratings.count} ratings)
              </span>
              <span className="students-count text-sm">
                {data.course.students.toLocaleString()} students
              </span>
            </div>
            <span className="text-sm">
              <span>Created by </span>
              <span className="text-secondary lg:text-light-purple underline">
                {data.course.instructor}
              </span>
            </span>
            <div className="update-language text-sm mt-1 mb-2 flex flex-col lg:flex-row">
              <div>
                <NewReleasesIcon fontSize="small" />
                <span className="align-middle ms-2 me-4">
                  {data.course.lastUpdated}
                </span>
              </div>
              <div className="mt-2 lg:mt-0">
                <LanguageIcon fontSize="small" />
                <span className="align-middle ms-2">English</span>
              </div>
            </div>
            <div className="details bg-white py-6 text-primary block lg:hidden">
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
                  <Button
                    handleClick={handleClick}
                    type="purple"
                    customClass={"py-3"}
                  >
                    Add to Cart
                  </Button>
                )}

                <div className="mt-2">
                  <span className="text-xs">30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
