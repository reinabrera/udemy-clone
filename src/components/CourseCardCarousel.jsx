import { usePopupContext } from "../context/popup_context";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function CourseCardCarousel({course}) {
  const { setCourse } = usePopupContext();
  const handleMouseOver = (e) => {
    const {x, top, width} = e.target.getBoundingClientRect();
    setCourse(prev => {
      return {...course, show: !prev.show, x: x, y: top, width: width }
    });
  }

  const handleClick = () => {
    setCourse(prev => {
      return {...prev, show: false}
    });
  }

  return (<div className="embla__slide ps-4 flex-[0_0_75%] xs:flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%]">
  <div onClick={handleClick} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className="course-card relative">
    <div className="course-thumbnail border border-gray-300 relative">
      <div className="size-full absolute top-0 bg-neutral-800 opacity-0 transition-all"></div>
      <img src={course.img} className="w-full" alt="alt" />
    </div>
    <div className="course-card-content mt-3">
      <h3 className="font-extrabold text-sm text-black">
        <Link className="w-full block" to={"/course/" + course.id}>{course.title}</Link>
      </h3>
      <span className="text-xs text-neutral-500">
        {course.instructor}
      </span>
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
      <div className="price mt-1">
        <span className="font-extrabold">
          ₱{new Intl.NumberFormat().format(course.price)}
        </span>
      </div>
    </div>
  </div>
</div>);
}