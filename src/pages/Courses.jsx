import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import categories from "../data/categories";
import subcategories from "../data/subcategories";
import courses from "../data/courses";
import FilterOption from "../components/FilterOption";
import { usePopupContext } from "../context/popup_context";
import PopupCourseList from "../components/PopupCourseList";
import Fuse from "fuse.js";
import CoursesPageTitle from "../components/CoursesPageTitle";
import CourseListAndFilter from "../components/CourseListAndFilter";

export default function Courses() {
  const { category, subcategory } = useParams();
  const [selectedRating, setSelectedRating] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState({});
  const [showFilter, setShowFilter] = useState(true);
  const { course } = usePopupContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    return () => {
      setSelectedRating(null);
    };
  }, [category, subcategory]);


  useEffect(() => {
    if (category && subcategory) {
      const subcategoryItem = subcategories.filter(
        (subCat) => subCat.slug === subcategory
      )[0];

      const subcategoryId = subcategoryItem.id;
      setFilteredCourses({
        name: subcategoryItem.name + " Courses",
        courses: courses.filter(
          (course) =>
            course.subcategory_id === subcategoryId &&
            course.ratings.stars >= selectedRating
        ),
      });
    } else if (category) {
      const categoryItem = categories.filter((cat) => cat.slug === category)[0];
      const categoryId = categoryItem.id;
      const subcategoryIds = subcategories
        .filter((subCat) => subCat.category_id === categoryId)
        .map((subCat) => subCat.id);
      setFilteredCourses({
        name: categoryItem.name + " Courses",
        courses: courses.filter(
          (course) =>
            subcategoryIds.includes(course.subcategory_id) &&
            course.ratings.stars >= selectedRating
        ),
      });
    } else if (query) {
      const fuseOptions = {
        threshold: 0.3,
        keys: [
          "title",
          "instructor",
          "description",
          "what_you_will_learn",
          "course_content.title",
          "course_content.content_list.title",
        ],
      };
      const fuse = new Fuse(courses, fuseOptions);
      const result = fuse
        .search(query)
        .map((course) => course.item)
        .filter((course) => course.ratings.stars >= selectedRating);
      setFilteredCourses({ name: "Search results", courses: result });
    }
  }, [category, subcategory, query, selectedRating]);


  return (
    <div className="courses-section relative">
      <CoursesPageTitle title={filteredCourses.name} />
      <FilterOption
        setShowFilter={setShowFilter}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <CourseListAndFilter showFilter={showFilter} selectedRating={selectedRating} setSelectedRating={setSelectedRating} filteredCourses={filteredCourses} />
      {course && course.show && <PopupCourseList content={course} />}
    </div>
  );
}
