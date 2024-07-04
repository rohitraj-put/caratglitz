import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const NavData = ['Gold', 'Diamond', 'Gemstone', 'Ring', 'Earring', 'Noserings', 'Bracelets', 'Nosepins', "Pendants", 'Mangalsutras', 'Pages'];

    useEffect(() => {
        let ticking = false;

        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > lastScrollY) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                    setLastScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [lastScrollY]);

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);
    return (
        <header className={`sticky top-[80px]  shadow-md flex items-center justify-between px-2 bg-rose-400 text-white overflow-hidden max-md:px-2 duration-300 max-lg:hidden ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isVisible ? 'z-10' : '-z-10'}`}>
            <nav className="nav font-semibold">
                <ul className="flex items-center max-md:hidden">
                    {NavData.map((item, index) => (
                        <li key={index} className="p-3 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-gray-300 duration-200 cursor-pointer">
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
