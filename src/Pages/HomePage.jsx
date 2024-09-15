import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../Components/Footer/Footer';
import IntroHome from '../Components/HomeComponents/IntroHome/IntroHome';


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
                    {/* Decorative golden lines */}
                    {/* Content */}
                    <div className=''>
                        <div className='relative z-10'>
                            <IntroHome />
                        </div>
                        {/* <div className='px-3 sm:px-28 relative z-10 mb-28 '>
                            <AboutUs />
                        </div>
                        <div className='relative z-10 '>
                            <CommentsSlider />
                        </div>
                        <div className='relative z-10 '>
                            <Recommendations />
                        </div>
                        <div className='relative z-10 '>
                            <MenuSelection />
                        </div>
                        <div className='relative z-10 '>
                            <Philosophy />
                        </div>
                        <div className='relative z-10 px-0 sm:px-28'>
                            <AboutUsVideo />
                        </div>
                        <div className='px-3 sm:px-28 relative z-10 mb-28 '>
                            <MenuCategory />
                        </div>
                        <div className='relative z-10'>
                            <BookATable />
                        </div> */}
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
