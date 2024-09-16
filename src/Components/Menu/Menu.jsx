import React from 'react';
import menu from "@assets/menu.jpg";
import line from "@assets/line.png";
import { Parallax } from 'react-scroll-parallax';

const menuItems = [
    { id: 1, title: "Coconut Truffle", description: "Cream, cookies, biscuits, hazelnut", price: 9 },
    { id: 2, title: "Chocolate Mousse", description: "Dark chocolate, cream, vanilla", price: 8 },
    { id: 3, title: "Lemon Tart", description: "Lemon curd, shortcrust pastry, meringue", price: 7 },
    { id: 4, title: "Tiramisu", description: "Espresso, mascarpone, cocoa", price: 10 },
];

function Menu() {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <Parallax y={[-50, 50]} speed={-100} className='absolute inset-0'>
                <div
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${menu})`, height: '100vh' }}
                ></div>
            </Parallax>

            <div className="absolute inset-0 flex flex-col text-white p-4 lg:p-32">
                <div className='flex flex-col items-start'>
                    <p className="text-black text-7xl tracking-widest font-greatVibes mb-0">
                        a true delight
                        <img src={line} alt="line" className='object-cover mb-6 mx-auto' />
                    </p>
                    <div className="w-full sm:w-[50%]">
                        {menuItems.map((item) => (
                            <div className='mb-10' key={item.id}>
                                <p className='text-black text-2xl tracking-widest font-semibold'>{item.title}</p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-gray-900 mr-2 flex-shrink-0'>{item.description}</p>
                                    <div className="flex-grow border-b border-dotted border-gray-900"></div>
                                    <span className='text-gray-900 ml-2 flex-shrink-0'>${item.price}</span>
                                </div>
                            </div>
                        ))}
                        <button className="border border-gold hover:text-gold hover:bg-transparent hover:opacity-100 tracking-widest px-11 w-full sm:w-auto font-comingSoon py-3 text-white bg-gold transition duration-300">
                            MENU
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;