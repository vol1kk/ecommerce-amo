"use client";
import { useState } from "react";

import cn from "@/utils/cn";
import Button from "@/components/Button";
import { Slide } from "@/features/Slider";
import { ChevronIcon } from "@/components/Icons";

type SliderProps = {
  slides: Slide[];
};

export default function Slider({ slides }: SliderProps) {
  const [currSlide, setCurrSlide] = useState(0);

  const nextSlide = () =>
    setCurrSlide(prev => (prev + 1 > slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative mr-4 flex overflow-hidden rounded-lg md:mr-0 md:rounded-none">
      <button
        onClick={prevSlide}
        aria-label="Go to previous slide"
        className="absolute left-5 top-1/2 z-30 -translate-y-1/2"
      >
        <ChevronIcon className="rotate-180 fill-white" />
      </button>
      {slides.map((slide, ind) => (
        <div
          key={ind}
          aria-label={`Slide ${ind}`}
          style={{ translate: `${-100 * currSlide}%` }}
          className={cn(
            "relative isolate w-full shrink-0 transition-all duration-500",
            currSlide !== ind && "invisible",
          )}
        >
          <img
            src={slide.image.src}
            alt={slide.content.title}
            className="h-[700px] w-full object-cover md:blur-md"
          />
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 font-bold text-white [&>*]:mb-10">
            <span className="inline-block text-2xl">
              {slide.content.category}
            </span>
            <h2 className="max-w-[300px] text-5xl">{slide.content.title}</h2>
            <h3 className="text-xl tracking-widest">
              {slide.content.subtitle}
            </h3>

            <Button className="px-20 py-4 text-black">Shop Now</Button>
          </div>
        </div>
      ))}
      <div
        aria-hidden={true}
        className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-[2px]"
      >
        {slides.map((_, ind) => (
          <div
            key={ind}
            onClick={() => setCurrSlide(ind)}
            className={cn(
              "h-[10px] w-[50px] cursor-pointer bg-purple-700 opacity-60",
              ind === currSlide && "opacity-100",
              ind === slides.length - 1 && "rounded-r-md",
              ind === 0 && "rounded-l-md",
            )}
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        aria-label="Go to next slide"
        className="absolute right-5 top-1/2 z-30 -translate-y-1/2"
      >
        <ChevronIcon className="fill-white" />
      </button>
    </section>
  );
}
