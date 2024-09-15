import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookATable() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setSelectedDate(new Date());
    }, []);

    return (
        <div className="container mx-auto bg-[#0F1D22] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center">
            <div className='my-20'>
                <h3 className="text-xl text-gold font-miniver text-center mb-5">Laurent's Tasty Offer</h3>
                <div className="flex items-center justify-center mb-16">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                    </svg>
                    <h2 className="text-3xl sm:text-5xl text-gold tracking-widest font-semibold text-center">BOOK A TABLE</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="ml-4">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
                    <select
                        id="persons"
                        className="bg-[#0F1D22] border cursor-pointer border-gold text-gray-300 text-sm focus:outline-none focus:ring-0 focus:border-gold block p-3 w-64"
                        required
                    >
                        <option value="1">1 person</option>
                        <option value="2">2 persons</option>
                        <option value="3">3 persons</option>
                        <option value="4">4 persons</option>
                        <option value="5">5 persons</option>
                        <option value="6">6 persons</option>
                        <option value="7">7 persons</option>
                        <option value="8">8 persons</option>
                        <option value="9">9 persons</option>
                        <option value="10">10 persons</option>
                    </select>

                    {/* Date Picker with React Icon */}
                    <div className="relative w-full sm:w-auto flex justify-center">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none">
                        </div>
                        <DatePicker
                            id="datepicker-range-start"
                            name="start"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="bg-[#0F1D22] border border-gold text-gray-300 text-sm focus:ring-0 focus:border-gold block w-64 cursor-pointer p-3"
                            placeholderText={selectedDate.toLocaleDateString()}
                            dateFormat="dd-MM-yyyy"
                        />
                    </div>

                    {/* Time Picker with React Icon */}
                    <select
                        id="times"
                        className="bg-[#0F1D22] border border-gold text-gray-300 text-sm focus:outline-none focus:ring-0 focus:border-gold block p-3 w-64 cursor-pointer"
                        required
                    >
                        <option value="1">10:00 am</option>
                        <option value="2">11:30 am</option>
                        <option value="3">12:45 pm</option>
                        <option value="4">2:15 pm</option>
                        <option value="5">3:00 pm</option>
                        <option value="6">4:30 pm</option>
                        <option value="7">6:00 pm</option>
                        <option value="8">7:15 pm</option>
                    </select>

                    <button className="border border-gold text-white tracking-widest px-11 font-comingSoon py-3 hover:bg-gold hover:text-black transition duration-300">
                        Book Now!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookATable;