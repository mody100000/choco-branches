import React from 'react'
import formImg from "@assets/formImg.jpg"
import line from "@assets/line.png"

function ContactUs() {
    return (
        <div className='relative overflow-hidden'>
            <div
                className='w-full h-full bg-cover bg-center object-cover'
                style={{ backgroundImage: `url(${formImg})`, minHeight: '100vh' }}
            >
                <div className="inset-0 flex flex-col items-center justify-center text-center text-white py-12 px-4 lg:px-32">
                    <div className='flex flex-col mb-16 items-center max-w-4xl'>
                        <p className="text-gold text-6xl font-greatVibes mb-2">come or leave a note</p>
                        <h2 className="text-6xl md:text-7xl font-semibold tracking-widest mb-4 text-black">we are social</h2>
                        <img src={line} alt="line" className='object-cover mb-6' />
                        <p className="text-center text-2xl font-thin font-josefin text-gray-700">Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.</p>
                    </div>
                    <form action="" className="w-full max-w-4xl font-comingSoon text-black">
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col md:flex-row gap-x-10 gap-y-6'>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    className='w-full border border-gray-400 focus:outline-none focus:border-gold px-4 py-3'
                                />
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className='w-full border border-gray-400 focus:outline-none focus:border-gold px-4 py-3'
                                />
                            </div>
                            <div className='flex flex-col md:flex-row gap-x-10 gap-y-6'>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    className='w-full border border-gray-400 focus:outline-none focus:border-gold px-4 py-3'
                                />
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className='w-full border border-gray-400 focus:outline-none focus:border-gold px-4 py-3'
                                />
                            </div>
                            <div>
                                <textarea name="" id="" placeholder='Text' className='w-full border border-gray-400 focus:outline-none focus:border-gold px-4 py-3 h-52'></textarea>
                            </div>
                        </div>
                        <button className="border border-gold mt-4 hover:text-gold hover:bg-transparent hover:opacity-100 tracking-widest px-12 w-full sm:w-auto font-comingSoon py-3 text-xl text-white bg-gold transition duration-300">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
