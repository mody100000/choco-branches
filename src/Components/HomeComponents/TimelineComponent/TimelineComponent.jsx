import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import image1 from "@assets/image1.jpg"

const timelineData = [
    {
        year: 1996,
        title: "EARLY BEGGINING",
        subtitle: "Year of beginning",
        description: "Lorem ipsum dolor sit amet, ad malorum rationibus ius, cu vix cirmod iudicabit deseruise, nam melius constituto in. Eos platonem electram et. Mei dictas atomorum voluptatibus eu, tollit sanctus usu ut.",
        image: image1 // Replace with actual image path
    },
    { year: 1999, title: "EXPANSION", subtitle: "Growth phase", description: "...", image: image1 },
    { year: 2003, title: "INNOVATION", subtitle: "New products", description: "...", image: image1 },
    { year: 2008, title: "GLOBAL REACH", subtitle: "International markets", description: "...", image: image1 },
];

const TimelineComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container mx-auto px-4 py-8">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {timelineData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                            <div className="w-full md:w-1/2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-72 h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                                <h3 className="text-xl text-gray-600 mb-4">{item.subtitle}</h3>
                                <p className="text-gray-600 mb-6">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-8 relative">
                <div className="h-0.5 bg-gray-200 absolute w-full top-1/2 transform -translate-y-1/2"></div>
                <div className="flex justify-between relative">
                    {timelineData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`w-4 h-4 rounded-full ${index <= activeIndex ? 'bg-yellow-500' : 'bg-gray-300'} relative z-10`}
                            ></div>
                            <span className="mt-2 text-sm">{item.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineComponent;