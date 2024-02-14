import Rating from "@mui/material/Rating";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { usePopupContext } from "../context/popup_context";

export default function CourseListCard({ course, index }) {
  const { setCourse } = usePopupContext();
  const itemRef = useRef(null);
  const handleMouseOver = () => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = itemRef.current;
    setCourse((prev) => {
      return {
        ...course,
        show: !prev.show,
        x: offsetLeft,
        y: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      };
    });
  };

  const handleClick = () => {
    setCourse(prev => {
      return {...prev, show: false}
    });
  }
  
  return (
    <li
      key={course.id}
      className={`${index > 0 ? "my-4" : ""}`}
      id={"course-item-" + course.id}
    >
      <div
        ref={itemRef}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
        onClick={handleClick}
        className="relative"
      >
        <div className="item-wrapper flex relative -ms-4 *:ps-4">
          <div className="featured-img flex-shrink-0 w-2/6">
            <img src={course.img} className="w-full" />
          </div>
          <div className="course-featured-content">
            <h3 className="font-extrabold text-base text-black">
              <Link className="w-full block leading-5 md:leading-normal" to={"/course/" + course.id}>
                {course.title}
              </Link>
            </h3>
            <p className="leading-5 mt-1 hidden md:block">{course.description}</p>
            <div className="text-xs text-neutral-500 leading-4 md:leading-6">
              {course.instructor}
            </div>
            <div className="rating-details flex items-center">
              <span className="rating font-bold text-sm">
                {course.ratings.stars}
              </span>
              <span className="stars ms-1">
                <Rating
                  value={course.ratings.stars}
                  precision={0.5}
                  readOnly={true}
                />
              </span>
              <span className="count text-sm ms-1 text-neutral-500">
                ({course.ratings.count})
              </span>
            </div>
            <div className="price ms-auto block md:hidden">
              <span className="font-extrabold">
                ₱{new Intl.NumberFormat().format(course.price)}
              </span>
            </div>
          </div>
          <div className="price ms-auto hidden md:block">
            <span className="font-extrabold">
              ₱{new Intl.NumberFormat().format(course.price)}
            </span>
          </div>
        </div>
      </div>

      <hr className="mt-4" />
    </li>
  );
}
