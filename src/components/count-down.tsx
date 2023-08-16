'use client';
import Countdown, { CountdownRendererFn, zeroPad } from "react-countdown";

export default function CountDown() {
    const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => (
        <div className="min-w-screen h-full flex items-center justify-center px-5 py-5">
            <div className="text-white absolute bottom-2">
                <h1 className="text-3xl text-center mb-3 font-extralight">Wedding to start</h1>
                <div className="text-6xl text-center flex w-full items-center justify-center">
                    <div className="text-2xl hidden sm:block mr-1 font-extralight">in</div>
                    <div className="w-20 mx-0 p-1 bg-opacity-5 text-orange-900 rounded-lg">
                        <div className="font-mono leading-none" x-text="days">{zeroPad(days)}</div>
                        <div className="font-mono uppercase text-sm leading-none">Days</div>
                    </div>
                    <div className="w-20 mx-0 p-1 bg-opacity-5 text-orange-900 rounded-lg">
                        <div className="font-mono leading-none" x-text="hours">{zeroPad(hours)}</div>
                        <div className="font-mono uppercase text-sm leading-none">Hours</div>
                    </div>
                    <div className="w-20 mx-0 p-1 bg-opacity-5 text-orange-900 rounded-lg">
                        <div className="font-mono leading-none" x-text="minutes">{zeroPad(minutes)}</div>
                        <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                    </div>
                    <div className="text-2xl  mx-1 font-extralight">and</div>
                    <div className="w-20 mx-0 p-1 bg-opacity-5 text-orange-900 rounded-lg">
                        <div className="font-mono leading-none" x-text="seconds">{zeroPad(seconds)}</div>
                        <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                    </div>
                </div><div className="text-sm text-center mt-3">October 27, 2023</div>
            </div>
        </div>
    );

    return (
            <Countdown date={new Date("2023-10-27")} renderer={renderer} />
    )
}
