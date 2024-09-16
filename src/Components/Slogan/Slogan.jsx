import React from 'react';
import slogan from "@assets/slogan.jpg";
import { Parallax } from 'react-scroll-parallax';

function Slogan() {
    return (
        <div className='relative w-full h-[80vh] overflow-hidden'>
            {/* Parallax effect for the image */}
            <Parallax y={[-50, 50]} speed={-100} className='absolute inset-0'>
                <div
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${slogan})`, height: '100vh' }}
                ></div>
            </Parallax>

            {/* Text remains centered and static */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white py-4 px-4 lg:px-32">
                <div className='flex flex-col items-center'>
                    <p className="text-gold text-7xl tracking-widest font-greatVibes mb-0">
                        If there's no chocolate where I'm headed, count me out.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
