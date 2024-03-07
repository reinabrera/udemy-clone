import { useState, forwardRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";


const OffCanvas = forwardRef((props, ref) => {
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      ref.current.style.display =
      ref.current.style.display === "block" ? "none" : "block";
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    ref.current.style.display = "none"; 
  }, [location, ref])

  return (
    <div ref={ref} style={{display: "none"}}
      data-position={props.position} className={`off-canvas fixed z-50 top-0 bottom-0 w-screen h-screen ${isClosing ? "closing" : ""} ${props.customStyle ? props.customStyle : ''}`}>
      <div onClick={handleClick} className="off-canvas-overlay absolute top-0 bottom-0 left-0 size-full"></div>
      <div
        className={`absolute top-3 bg-white rounded-full p-3 opacity-0 close-btn`}
      >
        <button onClick={handleClick} className="btn">
          <CloseIcon />
        </button>
      </div>
      <div className={`absolute top-0 bottom-0 w-64 bg-white text-start p-4 text-sm off-canvas-content-wrapper`}>
        {props.children}
      </div>
    </div>
  );
});

export default OffCanvas;
