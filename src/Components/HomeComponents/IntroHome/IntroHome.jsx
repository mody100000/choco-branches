import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imgBg1 from "@assets/imgBg1.jpg"
import imgBg2 from "@assets/imgBg2.jpg"
import imgBg3 from "@assets/imgBg3.jpg"
import imgBg4 from "@assets/imgBg4.jpg"

import line from "@assets/line.png"

import { Parallax } from 'react-scroll-parallax';

const slides = [
    {
        title: "TASTEFUL",
        subtitle: "the most delicious flavor combos",
        description: "Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.",
        image: imgBg1
    },
    {
        title: "CULINARY",
        subtitle: "exploring taste sensations",
        description: "Our passion for innovative cuisine drives us to create unforgettable dining experiences.",
        image: imgBg2
    },
    {
        title: "CULINARY",
        subtitle: "exploring taste sensations",
        description: "Our passion for innovative cuisine drives us to create unforgettable dining experiences.",
        image: imgBg3
    },
    {
        title: "GOURMET",
        subtitle: "a feast for the senses",
        description: "Embark on a culinary adventure with our expertly crafted dishes and unique flavor profiles.",
        image: imgBg4
    }
];

const IntroHome = () => {
    return (
        <div className="relative w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${index + 1}</span>`;
                    },
                    bulletClass: 'swiper-pagination-number',
                    bulletActiveClass: 'swiper-pagination-number-active',
                }}
                autoplay={{ delay: 75000 }}
                loop
                speed={1100}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Parallax y={[-20, 20]} speed={-100} className='absolute inset-0'>
                                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                            </Parallax>
                            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                            <div className="absolute inset-0 flex flex-col items-center lg:items-end justify-center text-center text-white py-4 px-4 lg:px-32">
                                <div className='flex flex-col items-center max-w-2xl'>
                                    <p className="text-gold text-4xl tracking-widest font-miniver">{slide.subtitle}</p>
                                    <h2 className="text-5xl md:text-8xl font-zentokyo tracking-widest my-4 text-black">{slide.title}</h2>
                                    <img src={line} alt="line" className='object-cover mb-4' />
                                    <p className="text-center  text-2xl  font-thin font-josefin text-black mb-8">{slide.description}</p>
                                    <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
                                        <button className="border border-black bg-black tracking-widest px-11 w-full sm:w-auto font-comingSoon py-3 hover:text-white hover:border-gold hover:bg-gold transition duration-300">
                                            DISCOVER
                                        </button>
                                        <button className="border border-gold text-gold tracking-widest px-11 w-full sm:w-auto font-comingSoon py-3 hover:text-white hover:bg-gold transition duration-300">
                                            VIEW MORE
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination !text-gold absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2"></div>

            </Swiper>
            <div className="swiper-button-prev arrowes !text-gold px-0 sm:px-10"></div>
            <div className="swiper-button-next arrowes !text-gold px-0 sm:px-10"></div>
        </div>
    );
};

export default IntroHome;