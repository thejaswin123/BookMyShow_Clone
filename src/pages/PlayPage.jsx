import React from "react";

//Components
import Poster from "../components/Poster/PosterComponent";
import PlayFilters from "../components/PlayFilters/PlayFiltersComponent";

const Plays = () => {
    return (
        <>
            <div className="container px-4 mx-auto my-10">
                <div className="w-full gap-4 lg:flex lg:flex-row-reverse">
                    <div className="p-4 bg-white rounded lg:w-3/4">
                        <h2 className="mb-4 text-2xl font-bold">
                            Play in NCR Delhi
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="flex items-center w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded lg:w-1/4">
                        <h2 className="mb-4 text-2xl font-bold">Filters</h2>
                        <div>
                            <PlayFilters
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Language"
                                tags={["English", "Hindi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;