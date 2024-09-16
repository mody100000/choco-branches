import React from 'react'
import line from "@assets/line.png"
import truffle1 from "@assets/truffle1.jpg"
import truffle2 from "@assets/truffle2.jpg"
import truffle3 from "@assets/truffle3.jpg"
import truffle4 from "@assets/truffle4.jpg"

const truffleItems = [
    {
        id: 1,
        image: truffle1, // Replace with actual image paths
        title: 'Truffle Item 1',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$20',
    },
    {
        id: 2,
        image: truffle2,
        title: 'Truffle Item 2',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$25',
    },
    {
        id: 3,
        image: truffle3,
        title: 'Truffle Item 3',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$30',
    },
    {
        id: 4,
        image: truffle4, // Replace with actual image paths
        title: 'Truffle Item 1',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$20',
    },
    {
        id: 5,
        image: truffle3,
        title: 'Truffle Item 2',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$25',
    },
    {
        id: 6,
        image: truffle2,
        title: 'Truffle Item 3',
        description: 'Chocobar, Cupcakes, Truffles',
        price: '$30',
    },
];

function TruffleGallery() {
    return (
        <div className='py-8 px-4'>
            <div className=" inset-0 flex flex-col items-center justify-center text-center text-white py-4 px-4 lg:px-32">
                <div className='flex flex-col items-center max-w-3xl'>
                    <p className="text-gold text-5xl font-greatVibes mb-0 ">we know that</p>
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-widest mb-3 text-black">truffle is art</h2>
                    <img src={line} alt="line" className='object-cover mb-4' />
                    <p className="text-center text-2xl font-thin font-josefin text-gray-700 mb-8">Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16">
                {truffleItems.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <img src={item.image} alt={item.title} className="object-cover w-64 h-64" />
                        <h3 className="text-2xl text-black font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <p className="text-xl font-bold text-black">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TruffleGallery