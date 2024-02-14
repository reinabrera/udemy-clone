import { useRef, useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Tabs({ items, selected, onClick }) {
  const ref = useRef();
  const [showButtons, setShowButtons] = useState(false);
  const [mobileButton, setMobileButton] = useState({
    left: false,
    right: true,
  });

  const handleRightClick = () => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + 300,
      behavior: "smooth",
    });
  };

  const handleLeftClick = () => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft - 300,
      behavior: "smooth",
    });
  };

  const handleScroll = (e) => {
    const maxScrollLeft = ref.current.scrollWidth - ref.current.offsetWidth;
    if (e.nativeEvent.srcElement.scrollLeft >= maxScrollLeft) {
      setMobileButton({ left: true, right: false });
    } else if (e.nativeEvent.srcElement.scrollLeft <= 1) {
      setMobileButton({ left: false, right: true });
    } else {
      setMobileButton({ left: true, right: true });
    }
  };

  useEffect(() => {
    if (ref.current) {
      if (ref.current.offsetWidth < ref.current.scrollWidth-50) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    }
  }, [ref.current]);

  return (
    <div className="tabs overflow-hidden relative">
      {showButtons && (
        <>
          <button
            className={`z-10 ${
              mobileButton.left ? "block" : "hidden"
            }  absolute -top-1 -left-2 left-btn`}
            onClick={handleLeftClick}
          >
            <ChevronLeftIcon sx={{ color: "#5624d0", fontSize: "2rem" }} />
          </button>
          <button
            className={`z-10 ${
              mobileButton.right ? "block" : "hidden"
            }  absolute -top-1 -right-2 right-btn`}
            onClick={handleRightClick}
          >
            <ChevronRightIcon sx={{ color: "#5624d0", fontSize: "2rem" }} />
          </button>
        </>
      )}

      <ul
        className="flex font-extrabold overflow-x-hidden -ms-7 *:ps-7 tabs-lists"
        ref={ref}
        onScroll={handleScroll}
      >
        {items.map((item) => {
          return (
            <li
              className={`hover:text-primary whitespace-nowrap ${
                selected === item.id ? "text-primary" : "text-tabs-default"
              }`}
              key={item.id}
            >
              <button
                onClick={() => {
                  onClick(item.id);
                }}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
