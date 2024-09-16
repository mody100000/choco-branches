import React from 'react';
import planBg from "@assets/planBg.jpg";
import line from "@assets/line.png";

const PlanCard = ({ title, price, features }) => (
    <div className="group h-full">
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-2 group-hover:border-gold h-full flex flex-col justify-between cursor-pointer">
            <div>
                <h3 className="text-5xl mb-4 text-gold font-greatVibes group-hover:text-gold transition-colors duration-300 ">{title}</h3>
                <img src={line} alt="line" className='object-cover mb-6 mx-auto' />
                <p className="text-5xl text-black font-greatVibes mb-8">${price}</p>
                {features.map((feature, index) => (
                    <p key={index} className="text-gray-600 mb-4">{feature}</p>
                ))}
            </div>
            <div>
                <p className='text-black text-lg mt-6 group-hover:text-gold underline font-comingSoon'>READ MORE</p>
            </div>
            {/* <button className="mt-6 px-8 py-3 rounded text-lg font-semibold bg-gray-200 text-gray-800 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                READ MORE
            </button> */}
        </div>
    </div>
);

function Plans() {
    const plans = [
        { title: "standard", price: 119, features: ["Lorem ipsum dolor sit amet", "Contrary to popular beli", "Lorem ipsum dolor sit amet"] },
        { title: "hot new", price: 179, features: ["Lorem ipsum dolor sit amet", "Contrary to popular beli", "Lorem ipsum dolor sit amet", "Dolor sit ipsum lorem"] },
        { title: "delights", price: 219, features: ["Lorem ipsum dolor sit amet", "Contrary to popular beli", "Lorem ipsum dolor sit amet"] },
        { title: "deluxe", price: 279, features: ["Lorem ipsum dolor sit amet", "Contrary to popular beli", "Lorem ipsum dolor sit amet"] }
    ];

    return (
        <div className='relative overflow-hidden'>
            <div
                className='w-full h-full bg-cover bg-center'
                style={{ backgroundImage: `url(${planBg})`, minHeight: '100vh' }}
            >
                <div className="inset-0 flex flex-col items-center justify-center text-center text-white py-12 px-4 lg:px-32">
                    <div className='flex flex-col mb-16 items-center max-w-4xl'>
                        <p className="text-gold text-6xl font-greatVibes mb-2">enjoy each bite</p>
                        <h2 className="text-6xl md:text-8xl font-semibold tracking-widest mb-4 text-black">our prices</h2>
                        <img src={line} alt="line" className='object-cover mb-6' />
                        <p className="text-center text-2xl font-thin font-josefin text-gray-700">Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                        {plans.map((plan, index) => (
                            <PlanCard
                                key={index}
                                title={plan.title}
                                price={plan.price}
                                features={plan.features}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plans;