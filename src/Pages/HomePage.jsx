import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../Components/Footer/Footer';
import IntroHome from '../Components/HomeComponents/IntroHome/IntroHome';
import OurStory from '../Components/HomeComponents/OurStory/OurStory';
import Slogan from '../Components/Slogan/Slogan';
import TruffleGallery from '../Components/HomeComponents/TruffleGallery/TruffleGallery';
import GalleryImage from '../Components/GalleryImage/GalleryImage';
import Plans from '../Components/Plans/Plans';
import Menu from '../Components/Menu/Menu';
import TimelineComponent from '../Components/HomeComponents/TimelineComponent/TimelineComponent';


const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ParallaxProvider>
                <div className="text-gold min-h-screen relative overflow-x-hidden">
                    <div className=''>
                        <div className='relative z-10'>
                            <IntroHome />
                        </div>
                        <div className='relative z-10 '>
                            <OurStory />
                        </div>
                        <div className='z-10 '>
                            <Slogan />
                        </div>
                        <div className='relative z-10 '>
                            <TruffleGallery />
                        </div>
                        <div className='relative z-10 '>
                            <GalleryImage />
                        </div>
                        <div className='relative z-10 '>
                            <Plans />
                        </div>
                        <div className='relative z-10 '>
                            <Menu />
                        </div>
                        <div className='relative z-10 '>
                            <TimelineComponent />
                        </div>
                    </div>
                    <div className='px-3 sm:px-28 relative z-10 mb-20'>
                        <div className="border-b-[1px] border-[#c8aa8180] w-full mx-auto"></div>
                        <Footer />
                    </div>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default HomePage;
