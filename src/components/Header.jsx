import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [dropdownStates, setDropdownStates] = useState({});
    const NavData = [
        {
            label: 'Gold', link: '/Gold', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Diamond', link: '/Diamond', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Gemstone', link: '/Gemstone', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Ring', link: '/Ring', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Necklace', link: '/Necklace', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Earrings', link: '/Earrings', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Noserings', link: '/Noserings', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Bracelets', link: '/Bracelets', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Nosepins', link: '/Nosepins', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Pendants', link: '/Pendants', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Mangalsutras', link: '/Mangalsutras', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        },
        {
            label: 'Pages', link: '/Pages', subMenu: [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
            ]
        }
    ];

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

    const toggleDropdown = (index) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <header className={`sticky top-[80px] shadow-md flex items-center justify-between px-2 bg-rose-400 text-white max-md:px-2 duration-300 max-lg:hidden ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isVisible ? 'z-10' : '-z-10'}`}>
            <nav className="nav font-semibold">
                <ul className="flex items-center max-md:hidden">
                    {NavData.map((item, index) => (
                        <li key={index} className="relative p-3 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-black duration-200 cursor-pointer" onMouseEnter={() => toggleDropdown(index)} onMouseLeave={() => toggleDropdown(index)}>
                            <Link to={`${item.link}`}>{item.label}</Link>
                            {dropdownStates[index] && (
                                <div className="absolute left-[-8px] mt-3.5 w-48 bg-white shadow-lg roul z-10">
                                    {item.subMenu.map((sublink, subIndex) => (
                                        <Link key={subIndex} to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{sublink}</Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
