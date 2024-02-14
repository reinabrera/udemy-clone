import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseContentSection from "./CourseContentSection";


export default function CourseContent({ data }) {
  const [totalTimeAndLectures, setTotalTimeAndLectures] = useState({
    totalTime: null,
    totalLectures: null,
  });
  const [isExpandedAll, setIsExpandedAll] = useState(false);
  const [isExpanded, setIsExpanded ] = useState([])
  const location = useLocation();

  useEffect(() => {
    setTotalTimeAndLectures({
      totalTime: null,
      totalLectures: null,
    });
  }, [location])

  if (data) {
    var totalSections = data.length;
  }

  if (totalTimeAndLectures.totalTime) {
    var hours = Math.floor(totalTimeAndLectures.totalTime / 60);
    var minutes = Math.floor(totalTimeAndLectures.totalTime % 60);
  }

  useEffect(() => {
    const initialArr = Array(totalSections).fill(false);
    initialArr[0] = true;
    setIsExpanded(initialArr);
  }, [])


  const handleClick = () => {
    setIsExpanded(prev => {
      return prev.map(() => !isExpandedAll);
    });
    setIsExpandedAll(prev => !prev);
  }

  return (
    <div className="course-content text-primary">
      <div className="container mx-auto px-6 lg:px-11 pb-8 md:py-8">
        <div className="wrapper w-full max-w-2xl">
          <h3 className="text-2xl font-bold">
            Course content
          </h3>
          <div className="overall-length-sum mt-4 md:mt-8 text-sm flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <span>{totalSections} sections</span> • {" "}
              <span>{totalTimeAndLectures.totalLectures} lectures</span> • {" "}
              <span>{hours + "hr "} {minutes > 0 && minutes + "min"} total length</span>
            </div>
            <button onClick={handleClick} className="text-secondary  text-start font-bold mt-4 md:mt-0">{ isExpandedAll ? 'Collapse all sections' : 'Expand all sections'}</button>
          </div>
          <div className="course-content-sections mt-2 border-r border-l border-b">
            <ul className="section-list">
              {data.map((item, index) => {
                return (
                  <CourseContentSection
                    key={"content-" + index}
                    data={item}
                    index={index}
                    expanded={isExpanded[index]}
                    setIsExpanded={setIsExpanded}
                    setTotalTimeAndLectures={setTotalTimeAndLectures}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
