import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, BellIcon, QuestionMarkCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navRoutes } from '../../utils/constants/navRoutes';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navigationRoutes, setNavigationRoutes] = useState(navRoutes);

    const handleMouseEnter = (index) => {
        let tempRoutes = [...navigationRoutes];
        tempRoutes[index].dropdown = true;
        setNavigationRoutes(tempRoutes);
    }

    const handleMouseLeave = (index) => {
        let tempRoutes = [...navigationRoutes];
        tempRoutes[index].dropdown = false;
        setNavigationRoutes(tempRoutes);
    }

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationRoutes.map((route, index) => (
                            !route.subroutes ? <Link to={route.path} className="font-semibold" key={index}>{route.name}</Link> :
                                <div className="relative" key={index}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}>
                                    <button className="flex items-center font-semibold">
                                        {route.name}
                                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                                    </button>
                                    {navigationRoutes[index].dropdown && <div className="absolute left-0 top-full bg-white shadow-md w-48">
                                        {route.subroutes.map((subroute, subIndex) => (
                                            <Link to={subroute.path} className="block py-2 px-4 hover:bg-gray-100" key={subIndex}>{subroute.name}</Link>
                                        ))}
                                    </div>}
                                </div>

                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
                        <div className="relative">
                            <BellIcon className="h-6 w-6 text-gray-500" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                2
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-gray-200 rounded-full p-2">
                                <span className="font-semibold">H</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="font-semibold">Hardeep</p>
                                <p className="text-xs text-gray-500">STAFF</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {navigationRoutes.map((route, index) => (
                            route.subroutes ? (
                                <div key={index} className="px-4">
                                    <button
                                        onClick={() => {
                                            const newDropdownStates = [...navigationRoutes];
                                            newDropdownStates[index].dropdown = !newDropdownStates[index].dropdown;
                                            setNavigationRoutes(newDropdownStates);
                                        }}
                                        className="flex items-center w-full py-2 font-semibold"
                                    >
                                        {route.name}
                                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                                    </button>
                                    {navigationRoutes[index].dropdown && (
                                        <div className="pl-4 space-y-2">
                                            {route.subroutes.map((subroute, subIndex) => (
                                                <Link
                                                    to={subroute.path}
                                                    className="block py-2 hover:bg-gray-100"
                                                    key={subIndex}
                                                >
                                                    {subroute.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    to={route.path}
                                    className="block py-2 px-4 hover:bg-gray-100 font-semibold"
                                >
                                    {route.name}
                                </Link>
                            )
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
