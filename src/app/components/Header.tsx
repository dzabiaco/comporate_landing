"use client";

import Link from "next/link";
import {useState, useTransition} from "react";
import {useRouter} from "next/router";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const t = useTranslations("Navigation");

    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white font-bold text-xl">Madlen
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/"
                                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {t('home')}
                                </Link>
                                <Link href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {t('about')}
                                </Link>
                                <Link href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {t('services')}
                                </Link>
                                <Link href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {t('testimonials')}
                                </Link>
                                {/*<Link href="#blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">*/}
                                {/*    {t('blog')}*/}
                                {/*</Link>*/}
                                <Link href="#contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {t('contacts')}
                                </Link>

                                <LocaleSwitcher/>
                            </div>
                            
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Heroicon name: menu */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-column">
                    <Link href="/"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('home')}
                    </Link>
                    <Link href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('about')}
                    </Link>
                    <Link href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('services')}
                    </Link>
                    <Link href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('testimonials')}
                    </Link>
                    {/*<Link href="#blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">*/}
                    {/*    {t('blog')}*/}
                    {/*</Link>*/}
                    <Link href="#contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('contacts')}
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
}
