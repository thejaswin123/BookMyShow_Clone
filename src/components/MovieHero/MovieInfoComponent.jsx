import React, { useState } from "react";

import PaymentModal from "../PaymentModal/PaymentComponent";

const MovieInfo = ({ movie }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const butMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl font-bold text-white">
                    {movie.original_title}
                </h1>
                <div className="flex flex-col gap-5 text-white">
                    <h4>4k ratings</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                    <h4>
                        {movie.runtime} min • {genres}{" "}
                    </h4>
                </div>
                <div className="flex items-center w-full gap-3">
                    <button
                        onClick={rentMovies}
                        className="w-full py-3 font-semibold text-white bg-red-500 rounded-lg"
                    >
                        Rent ₹149
                    </button>
                    <button
                        onClick={butMovies}
                        className="w-full py-3 font-semibold text-white bg-red-500 rounded-lg"
                    >
                        Buy ₹599
                    </button>
                </div>
            </div>
        </>
    );
};
export default MovieInfo;