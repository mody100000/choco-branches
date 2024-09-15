import React from 'react'
import recommendationImg from "@assets/recommendationImg.jpg"

function Recommendations() {
    return (
        <div className='flex flex-col justify-center py-28 px-3 lg:px-32 items-center lg:flex-row h-full'>
            <div className='w-full lg:w-1/2 flex justify-center items-center mb-20 lg:mb-0 '>
                <img src={recommendationImg} alt="recommendationImg" className='object-cover w-[85%] h-full' />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
                <h3 className='text-xl text-gold font-miniver text-center mb-3'>Recommendations</h3>
                <div className="flex items-center justify-center mb-6 px-20 lg:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4 overflow-visible">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                    </svg>
                    <h2 className="text-3xl lg:text-5xl text-gold font-semibold text-center ">Our best specialties</h2>
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
    )
}

export default Recommendations
