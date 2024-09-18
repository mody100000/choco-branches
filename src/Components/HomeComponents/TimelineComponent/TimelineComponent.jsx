import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import timelineImg1 from "@assets/timelineImg1.jpg";
import timelineImg2 from "@assets/timelineImg2.jpg";
import timelineImg3 from "@assets/timelineImg3.jpg";
import timelineImg4 from "@assets/timelineImg4.jpg";

import line from "@assets/line.png";

const timelineData = [
    {
        year: 1996,
        title: "EARLY BEGINNING",
        subtitle: "Year of beginning",
        description: "1996. - Year of beggining. Lorem ipsum dolor sit amet, ad malorum rationibus ius, cu vix eirmod iudicabit deseruise, nam melius constituto in. Eos platonem electram et. Mei dictas atomorum voluptatibus eu, tollit sanctus usu ut.",
        image: timelineImg1
    },
    { year: 1999, title: "EXPANSION", subtitle: "Growth phase", description: "1999. - Year of beggining. Lorem ipsum dolor sit amet, ad malorum rationibus ius, cu vix eirmod iudicabit deseruise, nam melius constituto in. Eos platonem electram et. Mei dictas atomorum voluptatibus eu, tollit sanctus usu ut.", image: timelineImg2 },
    { year: 2003, title: "INNOVATION", subtitle: "New products", description: "2003. - Year of beggining. Lorem ipsum dolor sit amet, ad malorum rationibus ius, cu vix eirmod iudicabit deseruise, nam melius constituto in. Eos platonem electram et. Mei dictas atomorum voluptatibus eu, tollit sanctus usu ut.", image: timelineImg3 },
    { year: 2008, title: "GLOBAL REACH", subtitle: "International markets", description: "2008. - Year of beggining. Lorem ipsum dolor sit amet, ad malorum rationibus ius, cu vix eirmod iudicabit deseruise, nam melius constituto in. Eos platonem electram et. Mei dictas atomorum voluptatibus eu, tollit sanctus usu ut.", image: timelineImg4 },
];

const TimelineComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex flex-col mb-28 justify-center items-center '>
                <p className="text-gold text-6xl font-greatVibes mb-2">enjoy each bite</p>
                <h2 className="text-6xl md:text-7xl font-semibold tracking-widest mb-4 text-black">our prices</h2>
                <img src={line} alt="line" className='object-cover mb-6' />
                <p className="text-center text-2xl max-w-4xl font-thin font-josefin text-gray-700">Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.</p>
            </div>
            <Swiper
                navigation={false}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {timelineData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-6 md:space-y-0">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-80 h-auto md:w-96 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                                <h3 className="text-md md:text-lg italic text-gray-600 mb-4">{item.subtitle}</h3>
                                <p className="text-sm md:text-lg md:w-[70%] mx-auto md:mx-0 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Timeline component */}
            <div className="mt-16 relative px-4 md:px-12 mx-auto">
                <div className="relative">
                    {/* Gray background line */}
                    <div className="h-1 bg-gray-300 absolute w-full top-1/2 transform -translate-y-1/2"></div>

                    {/* Gold progress line */}
                    <div
                        className="h-1 bg-yellow-500 absolute top-1/2 transform -translate-y-1/2 transition-all duration-300"
                        style={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
                    ></div>

                    {/* Timeline markers and year */}
                    <div className="flex justify-between relative">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/* Diamond-shaped marker */}
                                <div
                                    className={`w-3 h-3 transform rotate-45 ${index <= activeIndex ? 'bg-yellow-500' : 'bg-gray-300'} relative z-10 -mb-1.5`}
                                ></div>
                                <span className="mt-0 mb-[-24px] font-greatVibes text-2xl">{item.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation arrows */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={handleNext}
                >
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                </button>
            </div>
        </div>
    );
};

export default TimelineComponent;
