'use client';
import FallImage from "../../public/images/fall_bg.png";
export default function Timeline() {

    return (
        <div className="bg-white relative">
            <h1 className="text-center z-20 relative text-4xl font-bold text-green-900 py-3">Wedding Day Timeline</h1>
            <div
                className="flex flex-col z-20 relative max-w-2xl md:grid grid-cols-9 mx-auto p-2 text-green-50"
            >
                <div className="flex flex-row-reverse md:contents">
                    <div
                        className="bg-green-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 className="font-mono text-2xl mb-1">4:15</h3>
                        <p className="leading-tight text-justify">
                            Hopefully you&apos;re here by now! Get settled in and find a seat of your choice!
                        </p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow"
                        ></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow"
                        ></div>
                    </div>
                    <div
                        className="bg-green-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 className="font-mono text-2xl mb-1">4:30</h3>
                        <p className="leading-tight text-justify">
                            It&apos;s time to finally do this thing! The ceremony  will begin.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div
                        className="bg-green-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 className="font-mono text-2xl mb-1">5:30</h3>
                        <p className="leading-tight text-justify">
                            Cocktail hour – mingle with friends and family over a blend of refreshments and conversations.
                        </p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow"
                        ></div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div
                        className="bg-green-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 className="font-mono text-2xl mb-1">6:30</h3>
                        <p className="leading-tight text-justify">
                            Gather around for a meal on us! Every bite will be a toast to the start of our journey together.
                        </p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow"
                        ></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow"
                        ></div>
                    </div>
                    <div
                        className="bg-green-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 className="font-mono text-2xl mb-1">7:00</h3>
                        <p className="leading-tight text-justify">
                            Time to kick off the celebration, laughter, dancing, and cherished moments that we will hold forever.
                        </p>
                    </div>
                </div>
            </div>
            <div className="opacity-20 absolute top-0 z-0 bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${FallImage.src})`,
            backgroundPosition: "bottom",
        height: "100%",
        width: "100%",
      }}></div>
        </div>
    );
}
