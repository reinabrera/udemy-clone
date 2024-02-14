import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import { getCategoryAndSubcategory } from "../utils/get_cat_subcat";
import CoursePageHero from "../components/CoursePageHero";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import CourseContent from "../components/CourseContent";
import CoursePageSidebarPopup from "../components/CoursePageSidebarPopup";
import CoursePageSticky from "../components/CoursePageSticky";

export default function Course() {
  const { id } = useParams();
  const [position, setPosition ] = useState(null);
  const heroRef = useRef();

  const filteredCourse = courses.filter((item) => parseInt(id) === item.id)[0];
  const subcategory_id = filteredCourse.subcategory_id;
  const subcategory = getCategoryAndSubcategory.getSubcategory(subcategory_id);
  const category = getCategoryAndSubcategory.getCategory(subcategory_id);
  const data = {course: filteredCourse, category: category, subcategory: subcategory};

  useEffect(() => {
    if(heroRef) {
      setPosition(heroRef.current.offsetHeight);
    }
  }, [heroRef]);  

  return (
    <div className={`course-page course-${id}`}>
      <CoursePageSticky data={data.course} />
      <CoursePageHero data={data} heroRef={heroRef} />
      <CoursePageSidebarPopup data={data} position={position} />
      <WhatYouWillLearn data={data.course.what_you_will_learn} id={data.course.id} />
      <CourseContent data={data.course.course_content} />
    </div>
  );
}
