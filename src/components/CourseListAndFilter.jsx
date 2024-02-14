import CoursesList from "../components/CoursesList";
import RatingsFilter from "../components/RatingsFilter";

export default function CourseListAndFilter({showFilter, selectedRating, setSelectedRating, filteredCourses}) {
  return (
    <div className="course-list-and-filter px-6 mx-auto 2xl:container">
      <div
        className={`flex -ms-4 *:ps-4 mt-6 filter-course-list ${
          showFilter ? "" : "filter-disabled"
        }`}
      >
        <div className="filter hidden lg:flex  overflow-hidden">
          <div className="w-full">
            <RatingsFilter
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </div>
        </div>
        <div className="courses-list">
          <CoursesList courses={filteredCourses.courses} />
        </div>
      </div>
    </div>
  );
}
