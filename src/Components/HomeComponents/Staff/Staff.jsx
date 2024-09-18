import React from 'react';
import staff1 from "@assets/staff1.jpg"
import staff2 from "@assets/staff2.jpg"
import staff3 from "@assets/staff3.jpg"
import staff4 from "@assets/staff4.jpg"
import staff5 from "@assets/staff5.jpg"

const staffGallery = [
    { id: 1, image: staff1, name: "Sheri Mason", type: "Owner" },
    { id: 2, image: staff2, name: "Neal Lopez", type: "Main chef" },
    { id: 3, image: staff3, name: "Annie Yates", type: "Pastry chef" },
    { id: 4, image: staff4, name: "Alex Arnold", type: "Restaurant manager" },
    { id: 5, image: staff5, name: "Kellie Byrd", type: "General manager" },
];

const StaffMember = ({ image, name, type }) => (
    <div className="relative group overflow-hidden">
        <img
            src={image}
            alt={name}
            className="w-full h-auto transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-white">{type}</p>
        </div>
    </div>
);

function Staff() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {staffGallery.map((staff) => (
                    <StaffMember key={staff.id} {...staff} />
                ))}
            </div>
        </div>
    );
}

export default Staff;