import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";

//Context
import { MovieContext } from "../../context/Moviecontext";

function NavSm() {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div className="flex items-center justify-between text-gray-700 ">
                <div>
                    <h3 className="text-xl font-bold ">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );
}

function NavLg() {
    return (
        <>
            <div className="container flex items-center justify-between px-4 mx-auto">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-10 h-10">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center w-full gap-3 px-3 py-1 bg-white rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for movies, events, plays, sports and activities"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="flex items-center text-base text-gray-200 cursor-pointer hover:text-white">
                        Delhi NCR <BiChevronDown />
                    </span>
                    <button className="px-2 py-1 text-sm text-white bg-red-600 rounded">
                        Sign In
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
}

const MovieNavbar = () => {
    return (
        <>
            <nav className="p-4 bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 ">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavSm />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;