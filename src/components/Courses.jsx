import React, { useState } from "react";
import Tabs from "./Tabs";
import subcategories from "../data/subcategories";
import categories from "../data/categories";
import courses from "../data/courses";
import Button from "./Button";
import CoursesCarousel from "./CoursesCarousel";
import { Link } from "react-router-dom";

export default function Courses() {
  const [selected, setSelected] = useState(101);
  const selectedItem = subcategories.filter((item) => item.id === selected)[0];
  const selectedCourses = courses.filter(
    (course) => course.subcategory_id === selected
  );
  const category = categories.filter(
    (item) => item.id === selectedItem.category_id
  )[0].slug;

  return (
    <div className="courses px-6 2xl:container py-6 md:py-14  text-primary mx-auto">
      <div className="heading">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl">
          A broad selection of courses
        </h2>
        <p className="mt-3 text-lg">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <div className="tabs-wrapper mt-5">
        <Tabs
          items={subcategories.slice(0, 6)}
          selected={selected}
          onClick={(id) => {
            setSelected(id);
          }}
        />
      </div>
      <div className="carousel-wrapper border border-gray-300 p-8 mt-3">
        <div className="heading max-w-4xl">
          <h3 className="text-2xl font-bold">{selectedItem.tag_title}</h3>
          <p className="mt-2">{selectedItem.description}</p>
          <div className="text-sm mt-4">
            <Button type="border">
              <Link to={`/courses/${category}/${selectedItem.slug}`}>
                Explore {selectedItem.name}
              </Link>
            </Button>
          </div>
        </div>
        <div key={selected} className="carousel mt-8">
          <CoursesCarousel courses={selectedCourses} />
        </div>
      </div>
    </div>
  );
}
