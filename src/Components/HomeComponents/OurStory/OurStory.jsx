import React from 'react';
import ourStoryImg from "@assets/ourStoryImg.jpg";
import line from "@assets/line.png";

function OurStory() {
    return (
        <div
            className='w-full h-[90vh] bg-cover bg-center object-cover'
            style={{ backgroundImage: `url(${ourStoryImg})` }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white py-4 px-4 lg:px-32">
                <div className='flex flex-col items-center max-w-3xl'>
                    <p className="text-gold text-5xl font-greatVibes mb-0 ">familly tradition</p>
                    <h2 className="text-6xl md:text-7xl font-semibold tracking-widest mb-3 text-black">our story</h2>
                    <img src={line} alt="line" className='object-cover mb-4' />
                    <p className="text-center text-2xl font-thin font-josefin text-gray-700 mb-8">Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi. Per iuvaret ornatus gloriatur ne, ne sea principes assentior. Facer intellegat voluptaria vis no, te pri natum ludus inst.</p>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
