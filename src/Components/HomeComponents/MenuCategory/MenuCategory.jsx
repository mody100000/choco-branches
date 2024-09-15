import '../../../index.css';
import menuCat1 from "@assets/menuCat1.jpg"
import menuCat2 from "@assets/menuCat2.jpg"
import menuCat3 from "@assets/menuCat3.jpg"

const MenuCategory = () => {
    return (
        <div className="container mx-auto px-12 py-16 mt-24 h-full">
            <h3 className='text-xl text-gold font-miniver text-center mb-3'>Laurent’s tasty offer</h3>
            <div className="flex items-center justify-center mb-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
                <h2 className="text-3xl sm:text-5xl text-gold tracking-widest font-semibold text-center ">OUR MENU</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="ml-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center align-middle gap-y-10 lg:gap-x-16 lg:gap-y-0 leading-7 custom-ipad-layout">
                <div className="flex-1">
                    <div className='flex flex-col justify-center items-center'>
                        <img src={menuCat1} alt="STARTERS" className='w-full h-full object-cover' />
                        <h2 className='text-2xl mt-8 tracking-widest font-semibold'>STARTERS</h2>
                        <p className='text-white tracking-widest mt-1'>Specialties</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className='flex flex-col justify-center items-center'>
                        <img src={menuCat2} alt="MAIN COURSES" className='w-full h-full object-cover' />
                        <h2 className='text-2xl mt-8 tracking-widest font-semibold'>MAIN COURSES</h2>
                        <p className='text-white tracking-widest mt-1'>Specialties</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className='flex flex-col justify-center items-center'>
                        <img src={menuCat3} alt="DESSERTS" className='w-full h-full object-cover' />
                        <h2 className='text-2xl mt-8 tracking-widest font-semibold'>DESSERTS</h2>
                        <p className='text-white tracking-widest mt-1'>Specialties</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCategory;