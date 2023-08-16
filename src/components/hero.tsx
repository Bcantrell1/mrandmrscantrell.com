'use client';
import HeroImage from "../../public/images/website_background.jpg";
import CountDown from "./count-down";

export default function Hero() {
    return (
        <div className="overflow-hidden relative bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${HeroImage.src})`,
            backgroundPosition: "bottom",
        height: "100vh",
        width: "100%",
      }}>
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mt-2 mb-16 font-thin italic text-8xl tracking-tight md:text-6xl xl:text-7xl">
                            Brian <br/><span className="font-semibold text-orange-900">&</span><br/> Kelsea
                        </h1>
                    </div>
                </div>
            </div>
            <CountDown />
        </div>
    )
}
