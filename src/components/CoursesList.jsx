import CourseListCard from "./CourseListCard";

export default function CoursesList({ courses }) {
  return (
    <div className="courses-list--wrapper">
      <ul>
        {courses?.map((course, index) => (
          <CourseListCard key={"course-list-" + course.id} course={course} index={index} />
        ))}
      </ul>
    </div>
  );
}
