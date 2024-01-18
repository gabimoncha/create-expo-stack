import { useRef } from "react";
import { AUTHORS } from "../../../config";

export default function Testimonials() {
  const innerScrollerRef = useRef<HTMLDivElement | null>(null);

  interface Author {
    name: string;
    position: string;
    image: string;
    alt: string;
    testimonial: string;
  }

  const Testimonial = (author: Author, key: number) => {
    return (
      <div
        key={key}
        className="flex flex-col sm:-ml-[0.5px] border-white/20 py-12 sm:border-l sm:pr-8 sm:pt-0 sm:pl-16"
      >
        <figure className="flex flex-auto flex-col justify-between">
          <blockquote className="text-lg leading-8 text-white relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              className="absolute -top-14 -left-8 opacity-20 -z-[1]"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8533 9.11597C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95555 20.2848 9.30112C19.8445 8.72886 19.4227 8.75027 18.8533 9.11597Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.6789 9.11597C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95555 40.1105 9.30112C39.6702 8.72886 39.2484 8.75027 38.6789 9.11597Z"
                fill="white"
              />
            </svg>
            <p className="max-w-[40ch]">{author.testimonial}</p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <img
              className="h-14 w-14 rounded-3xl bg-gray-50"
              src={author.image}
              alt={author.alt}
              width={56}
              height={56}
            />
            <div className="text-base">
              <div className="font-semibold text-white">{author.name}</div>
              <div className="mt-1 text-gray-500">{author.position}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  };

  return (
    <section className="z-10 w-[90%] lg:w-[70%] sm:w-auto">
      <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem] xl:text-[4rem] pb-16 pt-24 2xl:pt-0">
        What people are saying
      </h1>
      <div className="infinite-scroll-x-container mx-auto max-w-7xl px-6 sm:px-8">
        <div
          ref={innerScrollerRef}
          className="infinite-scroll-x sm:w-max sm:pt-8 relative sm:flex flex-nowrap mx-auto grid max-w-2xl grid-cols-1 sm:mx-0 sm:max-w-none"
        >
          {AUTHORS.map((author: Author, key: number) =>
            Testimonial(author, key),
          )}
        </div>
      </div>
    </section>
  );
}
