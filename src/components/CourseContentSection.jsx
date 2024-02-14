import { useState, useEffect } from "react";
import CourseContentSectionItem from "./CourseContentSectionItem";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export default function CourseContentSection({ data, setTotalTimeAndLectures, expanded, index, setIsExpanded }) {
  const [sectionTime, setSectionTime] = useState(null);
  const lecturesCount = data.content_list.length;

  useEffect(() => {
    if (sectionTime) {
      setTotalTimeAndLectures((prev) => {
        return {...prev, totalTime: prev.totalTime + sectionTime, totalLectures: prev.totalLectures + lecturesCount}
      });
    }
  }, [sectionTime, lecturesCount]);

  if (sectionTime !== null) {
    var hours = Math.floor(sectionTime / 60);
    var minutes = Math.floor(sectionTime % 60);
  }

  const handleClick = () => {
    setIsExpanded(prev => {
      return prev.map((item, i) => {
        if (i === index) {
          return item = !prev[index];
        }
        return item;
      })
    });
  }

  return (
    <li className={`section-list-item ${expanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={handleClick} className={`bg-gray-50 w-full flex py-4 ps-5 pe-6 items-center justify-between border-t ${expanded ? 'border-b' : ''}`}>
        <div className="flex text-start items-center">
          <ExpandLessIcon />
          <h4 className="text-base font-extrabold ms-3 leading-5">{data.title}</h4>
        </div>
        <span className="text-sm ms-4 whitespace-nowrap hidden md:block">
          {lecturesCount} lectures •
          <span>
            {hours > 0 ? " " + hours + "hr" : ""}
            {minutes > 0 && " " + minutes + "min"}
          </span>
        </span>
      </button>
      <ul className="content-items py-4 px-6">
        {data.content_list.map((item, index) => {
          return (
            <CourseContentSectionItem
              key={index}
              data={item}
              index={index}
              setSectionTime={setSectionTime}
            />
          );
        })}
      </ul>
    </li>
  );
}
