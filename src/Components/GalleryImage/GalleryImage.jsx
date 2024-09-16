import React from 'react';
import image1 from "@assets/image1.jpg";
import image2 from "@assets/image2.jpg";
import image3 from "@assets/image3.jpg";
import image4 from "@assets/image4.jpg";
import image5 from "@assets/image5.jpg";
import image6 from "@assets/image6.jpg";
import image7 from "@assets/image7.jpg";

const galleryItems = [
    { id: 1, image: image2, name: "Fruit Cake", type: "Wedding Cake" },
    { id: 2, image: image7, name: "Chocolate", type: "Dessert" },
    { id: 3, image: image4, name: "Cheesecake", type: "Dessert" },
    { id: 4, image: image3, name: "Lemon Tart", type: "Pastry" },
    { id: 5, image: image5, name: "Apple Pie", type: "Pie" },
    { id: 6, image: image6, name: "Macarons", type: "Pastry" },
    { id: 7, image: image1, name: "Brownies", type: "Dessert" },
];

function GalleryImage() {
    return (
        <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`
              relative
              bg-gray-200
              ${index === 2 ? 'row-span-2' : ''}
              ${index === 2 ? 'h-[420px] sm:h-full' : 'h-[300px] sm:h-[350px]'}
              ${index === 2 && 'sm:col-span-2 md:col-span-1'}
              group
              overflow-hidden
              cursor-pointer
            `}
                >
                    <img
                        src={item.image}
                        alt={`Gallery Item ${item.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white py-5 m-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 flex flex-col justify-center items-center">
                        <div className='border-2 border-yellow-500 py-5 px-8 hover:bg-yellow-50 transition-colors duration-300'>
                            <p className="text-black text-lg font-semibold px-2 py-1 uppercase">
                                {item.name}
                            </p>
                            <p className='text-gray-900 text-center'>{item.type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryImage;