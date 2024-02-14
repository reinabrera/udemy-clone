import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CarouselButton({direction, onClick, customClass}) {

  const getChevron = () => {
    if (direction === "left") {
      return <ChevronLeftIcon />
    } else {
      return <ChevronRightIcon />
    }
  }

  return(
    <button onClick={() => {
      onClick();
    }} className={`carousel-button bg-primary rounded-full size-10 flex items-center justify-center absolute ${direction} ${customClass}`}>
      {getChevron()}
    </button>
  );
}