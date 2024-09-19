import React from 'react';

const HomeVideo = () => {
    return (
        <div className="m-0 p-0 relative h-[75vh]">
            <div className="w-full h-full">
                <iframe
                    className="w-full h-full object-cover z-10 relative"
                    src="https://www.youtube.com/embed/ZJ_KzbtIDBk?siautoplay=1&loop=1&mute=1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
        </div>
    );
};

export default HomeVideo;