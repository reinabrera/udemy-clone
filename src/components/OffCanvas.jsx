import { useState, forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

const OffCanvas = forwardRef((props, ref) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      ref.current.style.display =
      ref.current.style.display === "block" ? "none" : "block";
      setIsClosing(false);
    }, 300);
  };

  return (
    <div ref={ref} style={{display: "none"}}
      data-position={props.position} className={`off-canvas fixed z-50 top-0 bottom-0 w-screen h-screen ${isClosing ? "closing" : ""} ${props.customStyle ? props.customStyle : ''}`}>
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
