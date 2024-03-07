import HeroCarousel from "../components/HeroCarousel";
import Courses from "../components/Courses";
import { usePopupContext } from "../context/popup_context";
import TopCategories from "../components/TopCategories";
import categories from "../data/categories";
import PopupCourse from "../components/PopupCourse";

export default function Home() {
  const { course } = usePopupContext();

  return (
    <div className="homepage">
      <HeroCarousel />
      <Courses />
      <TopCategories categories={categories} />
      {course && course.show && <PopupCourse content={course} />}
    </div>
  );
}
