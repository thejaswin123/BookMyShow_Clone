import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";

function HomePage() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
            console.log(getPopularMovies);
        };

        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />

            <div className="container px-4 mx-auto my-8 md:px-12">
                <h1 className="my-3 ml-0 text-2xl font-bold text-gray-800 sm:ml-3">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container px-4 mx-auto my-8 md:px-12">
                <PosterSlider
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className="py-12 bg-premier-800">
                <div className="container flex flex-col gap-3 px-4 mx-auto my-8 md:px-12">
                    <div className="hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand new releases every Friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className="container px-4 mx-auto my-8 md:px-12">
                <PosterSlider
                    title="Online Streaming Event"
                    subtitle=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
}
export default HomePage;