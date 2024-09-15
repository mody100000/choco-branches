import React from 'react';
import philosophyimg1 from "@assets/philosophyimg1.jpg"
import philosophyimg2 from "@assets/philosophyimg2.jpg"

function Philosophy() {


    return (
        <div className='h-full text-[#9C7C57] p-1 sm:px-36 py-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-x-4 gap-y-20'>
                <div className='w-full mt-20 lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div>
                        <img src={philosophyimg1} alt="philosophyimg1" className='object-cover px-10 py-4 sm:p-0' />
                    </div>
                    <div>
                        <img src={philosophyimg2} alt="philosophyimg2" className='object-cover px-10 py-4 sm:p-0' />
                    </div>
                </div>
                <div className='w-full lg:w-[45%] flex flex-col justify-center items-center'>
                    <h3 className='text-xl text-gold font-miniver text-center mb-3'>Recommendations</h3>
                    <div className="flex items-center justify-center mb-6 px-20 lg:px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4 overflow-visible">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                        </svg>
                        <h2 className="text-3xl lg:text-5xl text-gold font-semibold text-center ">Our tips</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="ml-4 overflow-visible">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                        </svg>
                    </div>
                    <p className='max-w-2xl mx-auto px-10 text-center text-gray-200 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt obcaecati repudiandae adipisci perspiciatis adipisicing elit Deserunt laboriosam. Deserunt harum expedita facere Nemo.</p>
                    <button className="border border-gold tracking-widest px-11 font-comingSoon py-3 text-white hover:bg-gold hover:text-black transition duration-300">
                        VIEW MORE
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Philosophy;