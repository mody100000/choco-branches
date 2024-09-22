import React from 'react';
import footerLogo from "@assets/logo (1).jpg"
const Footer = () => {
    return (
        <footer className="py-16">
            <div className="container mx-auto text-center text-gray-900 font-josefin leading-relaxed">
                <div className="mb-6">
                    <div className="inline-block">
                        <img
                            src={footerLogo}
                            alt="Logo"
                            className="mx-auto w-36 h-36 rounded-3xl"
                        />
                    </div>
                </div>
                <p className="text-lg mb-6 leading-10">
                    Lamera Restaurant, Bani Sweif
                </p>
                <p className="mb-6">
                    <a target='_blank' href="https://maps.app.goo.gl/UnPiCn5AMuVMSBDb7" className='hover:text-gold'>
                        3485+R82 Beni Suef
                    </a>, 01010003321, reservations@example.com
                </p>
                <p className="mb-6">
                    Open: 24 Hours
                </p>
                <div className="flex justify-center space-x-12 mt-12">
                    <a target="_blank" href="https://www.facebook.com/chocobranches" className="hover:text-gray-600 border-b-2 border-gold">Facebook</a>
                    <a target="_blank" href="https://www.instagram.com/chocobranches/" className="hover:text-gray-600 border-b-2 border-gold">Instagram</a>
                    <a target="_blank" href="https://maps.app.goo.gl/UnPiCn5AMuVMSBDb7" className="hover:text-gray-600 border-b-2 border-gold">Location</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
