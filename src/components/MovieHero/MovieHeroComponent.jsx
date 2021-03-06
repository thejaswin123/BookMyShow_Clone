import React, { useState, useContext } from "react";
import MovieInfo from "./MovieInfoComponent";
import PaymentModal from "../PaymentModal/PaymentComponent";
//context
import { MovieContext } from "../../context/Moviecontext";

const MovieHero = () => {
    // const [movie] = useState({
    //     id: "asfasdf",
    //     original_title: "Fast and Furious 9",
    //     overview:
    //         "2h 23m • Action , Adventure , Crime , Thriller • UA • 2 Sep, 2021",
    //     backdrop_path:
    //         "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    //     poster_path:
    //         "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    // });

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

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
            <div>
                {/* mobile & tab sized devices */}
                <div className="w-full lg:hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="cover poster"
                        className="m-4 rounded"
                        style={{
                            width: "calc(100% - 2rem)",
                        }}
                    />
                </div>
                <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="flex flex-col gap-2 text-black md:px-4">
                            <h4>4k ratings</h4>
                            <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                            <h4>
                                {movie.runtime} min • {genres}{" "}
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 text-xl md:px-4 md:w-screen">
                        <button onClick={rentMovies} className="w-full py-3 font-semibold text-white bg-red-500 rounded-lg" >
                            Rent ₹149
                        </button>
                        <button onClick={butMovies} className="w-full py-3 font-semibold text-white bg-red-500 rounded-lg" >
                            Buy ₹599
                        </button>
                    </div>
                </div>

                {/* Large Screen Devices */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                        }}
                    ></div>

                    <div className="absolute z-30 flex items-center gap-10 left-24 top-10">
                        <div className="w-64 h-96">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="Movie Poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="backdrop poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieHero;