import React from 'react';

const WeddingDetails = () => {
    return (
        <div className="bg-white text-black flex flex-col lg:flex-row justify-center items-center lg:space-x-12 p-8">
            <div className="max-w-md h-full mb-8 lg:mb-0 lg:w-1/2">
                <div className="mb-4 lg:text-left">
                    <h1 className="text-4xl font-serif mb-4 tracking-[20px] underline decoration-red-800 italic">THE<br /> WEDDING<br /> DAY</h1>
                    <p className="text-sm italic font-medium mt-5 lg:mt-20 tracking-wider">*SUBJECT TO CHANGE<br /> please check back regularly</p>
                </div>
                <div className="lg:hidden">
                    <h2 className="text-lg font-serif bold mb-2 tracking-wider decoration-red-900 italic">Date + Time</h2>
                    <p className="text-base">October 27, 2023</p>
                    <p className="text-base">Four-Thirty in the Afternoon</p>
                </div>
            </div>
            <div className="max-w-md text-left lg:w-1/2">
                <div className="hidden lg:block mb-6">
                    <h2 className="text-4xl font-serif mb-2 italic underline decoration-red-800">Date + Time</h2>
                    <p className="text-lg italic">October 27, 2023</p>
                    <p className="text-base">Four-Thirty in the Afternoon</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-4xl font-serif mb-2 italic underline decoration-red-800">Ceremony</h2>
                    <p className="text-base">The Buttes at Reflections</p>
                    <a
                        href="https://maps.google.com/?q=9800+N+Oracle+Rd,+Tucson,+AZ+85704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-900 font-bold hover:underline"
                    >
                        9800 N Oracle Rd, Tucson, AZ 85704
                    </a><br />
                </div>
                <div>
                    <h2 className="text-4xl font-serif mb-2 italic underline decoration-red-800">Reception</h2>
                    <p className="mb-4">
                       The reception will be held at the same location as the ceremony. We will have a cocktail hour while we take pictures and then we will have dinner and dancing! 
                    </p>
                    <p className="mb-4">
                        We ask that you find accomidations for children if possible. If its not possible let us know ahead of time!
                    </p>
                    <p className="mb-4">
                        We will have an open bar and a DJ for the night! We will also have a photo booth for you to take pictures with us and each other! Other ammenities and goodies, see for yourself get your RSVP in!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeddingDetails;
