import React from 'react';
import footerLogo from "@assets/logo.webp"
const Footer = () => {
    return (
        <footer className="py-16">
            <div className="container mx-auto text-center text-gray-300 font-josefin leading-relaxed">
                <div className="mb-6">
                    <div className="inline-block">
                        <img
                            src={footerLogo}
                            alt="Logo"
                            className="mx-auto mb-5"
                        />
                    </div>
                </div>
                <p className="text-lg mb-6 leading-10">
                    Lamera Restaurant, Bani Sweif
                </p>
                <p className="mb-6">
                    <a target='_blank' href="https://maps.app.goo.gl/YTgH5WZ5ZyPX5DNw6" className='hover:text-gold'>
                        3485+M67 Beni Suef
                    </a>, 010-1000-3323, reservations@example.com
                </p>
                <p className="mb-6">
                    Open: 24 Hours
                </p>
                <div className="flex justify-center space-x-12 mt-12">
                    <a target="_blank" href="https://www.facebook.com/lamera.bns" className="hover:text-gray-100 border-b-2 border-gold">Facebook</a>
                    <a target="_blank" href="https://www.instagram.com/explore/locations/1003752057/" className="hover:text-gray-100 border-b-2 border-gold">Instagram</a>
                    <a target="_blank" href="https://maps.app.goo.gl/YTgH5WZ5ZyPX5DNw6" className="hover:text-gray-100 border-b-2 border-gold">Location</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
