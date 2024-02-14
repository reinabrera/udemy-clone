import { useEffect } from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export default function CourseContentSectionItem({ data, index, setSectionTime}) {
  useEffect(() => {
    if (data.time) {
      var timeString = data.time;
      if (timeString) {
        var [minutes, seconds] = timeString.split(":").map(Number);
        var totalMinutes = minutes + seconds / 60;
        setSectionTime((prev) => prev + totalMinutes);
      }
    }
  }, [data.time]);

  return (
    <li
      className={`course-content-section-item flex justify-between items-start text-primary ${
        index > 0 ? "mt-2" : ""
      }`}
    >
      <div className="flex">
        {data.time ? <OndemandVideoIcon sx={{marginTop: '3px'}} /> : <InsertDriveFileOutlinedIcon sx={{marginTop: '3px'}} />}
        <span className="ms-3 text-sm">{data.title}</span>
      </div>
      <span className="text-neutral-500 text-sm font-medium hidden md:block">
        {data.time ? data.time : data.string}
      </span>
    </li>
  );
}
