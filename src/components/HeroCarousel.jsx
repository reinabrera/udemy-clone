import React, {useCallback} from "react";
import hero from "../data/hero";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./Button";
import CarouselButton from "./CarouselButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSearchBarMobileContext } from "../context/search_bar_mobile_context";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
  const { setIsVisible } = useSearchBarMobileContext();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const handleClick = () => {
    setIsVisible(true);
  }

  return (
    <div className="hero-carousel 2xl:container mx-auto text-primary md:mb-12">
      <div className="embla md:relative " ref={emblaRef}>
        <div className="embla__container">
          {hero.map((item, index) => {
            return (
              <div key={index} className="embla__slide relative">
                <img src={item.img} className="object-cover object-center h-60 md:h-auto" alt="hero alt"/>
                <div className="md:absolute md:left-10 lg:left-16 md:top-6 lg:top-16 bg-white p-6 md:max-w-sm lg:max-w-md md:drop-shadow-lg">
                  <h1 className="font-display text-2xl md:text-lg lg:text-3xl font-extrabold">{item.title}</h1>
                  <p className="mt-2 text-sm md:text-base">{item.content}</p>
                  {item.cta && <div className="mt-3"><Button type="primary">{item.cta}</Button></div>}
                  <div className="mobile-search flex md:hidden mt-14 border border-primary py-3 px-4 ">
                    <input onClick={handleClick} className="w-full flex-1 text-primary outline-0" type="text" placeholder="What do you want to learn?"/>
                    <SearchOutlinedIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <CarouselButton direction="left" customClass={"hidden md:block"} onClick={scrollPrev} />
        <CarouselButton direction="right" customClass={"hidden md:block"} onClick={scrollNext} />
      </div>
    </div>
  );
}
