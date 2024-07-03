import React from 'react';



function Header() {
    const NavData = ['Gold', 'Diamond', 'Gemstone', 'Ring', 'Earring', 'Noserings', 'Bracelets', 'Noserings', 'Nosepins', "Pendents", 'Mangalsutras', 'Pages']

    return (
        <>

            <header className="header  shadow-md flex items-center justify-between px-2  text-black  overflow-hidden max-md:px-2">
                <nav className="nav font-semibold">
                    <ul className="flex items-center max-md:hidden ">
                        {NavData.map((item, index) => (
                            <li key={index} className="p-3 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header >

        </>
    );
}

export default Header;
