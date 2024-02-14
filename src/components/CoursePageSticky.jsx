import Rating from "@mui/material/Rating";
import Button from "./Button";

export default function CoursePageSticky({ data }) {
  return (
    <>
      <div className="course-page-sticky bg-primary fixed top-0 min-h-16 w-full z-10 shadow-lg px-4 py-2 hidden lg:block">
        <div className="text-white font-extrabold tracking-tight">
          {data.title}
        </div>
        <div className="rating-details flex items-center mt-1">
          <span className="rating font-bold text-sm text-gold">
            {data.ratings.stars}
          </span>
          <span className="stars-sticky ms-1 flex items-center">
            {
              <Rating
                sx={{ color: "#f69c08", fontSize: "1rem" }}
                value={data.ratings.stars}
                precision={0.5}
                readOnly={true}
              />
            }
          </span>
          <span className="count text-sm ms-1 text-light-purple underline">
            ({data.ratings.count} ratings)
          </span>
          <span className="students-count text-sm ms-2 text-white">
            {data.students.toLocaleString()} students
          </span>
        </div>
      </div>
      <div className="course-page-sticky bg-white fixed bottom-0 min-h-16 w-full z-10 shadow-[0_-1px_10px_0px_rgba(45,47,49,0.2)] px-4 py-2 block lg:hidden">
        <div className="details bg-white text-primary flex items-center -ms-4 *:ps-4">
          <div className="price">
            <span className="font-extrabold text-lg tracking-tighter">
              ₱{new Intl.NumberFormat().format(data.price)}
            </span>
          </div>
          <div className="text-center flex-1">
            <Button type="purple" customClass={"py-3"}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
