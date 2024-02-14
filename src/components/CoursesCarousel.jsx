import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselButton from "./CarouselButton";
import CourseCardCarousel from "./CourseCardCarousel";

export default function CoursesCarousel({ courses }) {

  const [canScroll, setCanScroll] = useState({});

  const [ slidesToScrollCount, setSlidesToScrollCount ] = useState();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: slidesToScrollCount,
    align: "start",
    watchDrag: false,
  });


  const scroll = useCallback((direction) => {
    if (emblaApi) {
      if (direction === "left") {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }
      setCanScroll({left: emblaApi.canScrollPrev(), right: emblaApi.canScrollNext()});
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      setCanScroll({left: emblaApi.canScrollPrev(), right: emblaApi.canScrollNext()});
      if (emblaApi.slidesInView().length > 0) {
        if (emblaApi.slidesInView().length - 2 > 0) {
          setSlidesToScrollCount(emblaApi.slidesInView().length - 2);
        } else {
          setSlidesToScrollCount(emblaApi.slidesInView().length - 1);
        }
      }


    }
  }, [emblaApi]);


  return (
    <div className="courses-carousel relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container -ms-4">
          {courses.map((course) => {
            return (
              <CourseCardCarousel key={course.id} course={course} />
            );
          })}
        </div>
      </div>
      {emblaApi && canScroll?.left && <CarouselButton direction="left" onClick={() => {
        scroll("left")
      }} /> }
      {emblaApi && canScroll?.right && <CarouselButton direction="right" onClick={() => {
        scroll("right")
      }} />}
    </div>
  );
}
