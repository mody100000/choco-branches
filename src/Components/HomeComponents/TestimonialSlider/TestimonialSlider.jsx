import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RiDoubleQuotesR } from "react-icons/ri";
import line from "@assets/line.png"
const testimonials = [
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "ANDREA CHUNG",
        job: "Cook",
    },
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "JOHN DOE",
        job: "Chef",
    },
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "JANE SMITH",
        job: "Sous Chef",
    },
];

const TestimonialSlider = () => {
    return (
        <div className="relative w-full overflow-hidden my-32">
            <div className='flex flex-col items-center mx-auto'>
                <p className="text-gold text-5xl font-greatVibes mb-0 ">familly tradition</p>
                <h2 className="text-6xl md:text-7xl font-semibold tracking-widest mb-3 text-black">our story</h2>
                <img src={line} alt="line" className='object-cover' />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${index + 1}</span>`;
                    },
                    bulletClass: 'swiper-pagination-number',
                    bulletActiveClass: 'swiper-pagination-number-active',
                }}
                autoplay={{ delay: 5000 }}
                loop
                speed={600}
                className="w-[70%]"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-gray-400 px-4 py-8 sm:px-8 md:px-12 lg:px-16">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-miniver text-center leading-relaxed mb-4 sm:mb-6">
                                {testimonial.text}
                            </p>
                            <h5 className="text-lg sm:text-xl md:text-2xl text-gold font-semibold text-center tracking-wider mb-2">
                                {testimonial.author}
                            </h5>
                            <p className="text-base sm:text-lg md:text-xl text-center mb-10 ">
                                {testimonial.job}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Pagination */}
            <div className="swiper-pagination flex justify-center mt-4"></div>
        </div>
    );
};

export default TestimonialSlider;