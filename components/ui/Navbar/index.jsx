import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [state, setState] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for managing the dropdown visibility
    const { events } = useRouter();

    const navigation = [
        { title: "Strona Główna", path: "/" },
        { title: "O mnie", path: "/#o-mnie" },
        {
            title: "Usługi",
            path: "/#uslugi",
            dropdown: [
                { title: "Instrukcja Bezpieczeństwa Pożarowego", path: "/instrukcja-bezpieczenstwa-pozarowego" },
                { title: "Operat przeciwpożarowe", path: "/operat-ppoz" },
                { title: "Audyt przeciwpożarowy", path: "/audyt-ppoz" },
                { title: "Scenariusz rozwoju pożaru", path: "/scenariusz-rozwoju-pozaru" },
                { title: "Ocena zagrożenia wybuchem", path: "/ocena-zagrozenia-wybuchem" },
            ]
        },
    ];

    useEffect(() => {
        // Close the navbar menu when navigating
        const handleState = () => {
            document.body.classList.remove("overflow-hidden");
            setState(false);
            setDropdownOpen(false); // Close dropdown when navigating away
        };
        events.on("routeChangeStart", handleState);
        events.on("hashChangeStart", handleState);

        // Clean up event listeners
        return () => {
            events.off("routeChangeStart", handleState);
            events.off("hashChangeStart", handleState);
        };
    }, [events]);

    const handleNavMenu = () => {
        setState(!state);
        document.body.classList.toggle("overflow-hidden");
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className='font-sora sm:px-28 px-6 pt-3'>
            <nav className='w-full'>
                <div className="items-center flex justify-between w-full">
                    <div className="flex items-center justify-between py-3 md:py-5">
                        <Brand />
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-gray-500 hover:text-gray-800"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>

                    {/* Overlay for darkening the background */}
                    {state && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-20"
                            onClick={handleNavMenu} // Clicking the overlay will also close the menu
                        ></div>
                    )}

                    {/* Mobile Menu */}
                    <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-30 transform ${state ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:shadow-none md:pb-0 md:mt-0 md:w-auto`}>
                        <button className="absolute top-4 right-4 text-red-600 hover:text-red-700 md:hidden" onClick={handleNavMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col justify-start items-start space-y-6 p-6 md:flex-row md:justify-end md:items-center md:space-x-6 md:space-y-0 md:font-medium">
                            {navigation.map((item, idx) => {
                                if (item.dropdown) {
                                    return (
                                        <li key={idx} className="relative group sm:p-3 md:p-0">
                                            <button
                                                onClick={toggleDropdown}
                                                className="flex items-center gap-x-1 cursor-pointer duration-150 group-hover:text-gray-400 w-full text-left"
                                            >
                                                {item.title}
                                                <IoIosArrowDown
                                                    size={18}
                                                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            {dropdownOpen && (
                                                <ul className="mt-2 space-y-2">
                                                    {item.dropdown.map((subItem, subIdx) => (
                                                        <li key={subIdx} className="pl-4 hover:bg-gray-100">
                                                            <Link href={subItem.path} className="block hover:text-gray-400">
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={idx} className="duration-150">
                                            <Link
                                                href={item.path}
                                                className="block hover:text-gray-400"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                            <li>
                                <NavLink
                                    href="#kontakt"
                                    className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
