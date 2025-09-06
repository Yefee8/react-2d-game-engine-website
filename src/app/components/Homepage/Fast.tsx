import { FaFeatherAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FcFlashOn } from "react-icons/fc";

export default function Fast() {
  return (
    <div id="fast" className="min-h-screen container flex max-md:flex-col items-center gap-4 py-16">
      <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
          <FcFlashOn className="text-[100px] md:text-[200px] rotate-0" />
        <FaPlus className="text-[38px] md:text-[75px] text-slate-800 my-8" />

        <FaFeatherAlt className="text-[75px] md:text-[150px] text-blue-300" />
      </div>

      <div className="md:w-1/2 flex flex-col items-center gap-8">
        <h3 className="text-2xl font-medium">Fast and Lightweight</h3>
        <p className="text-lg text-slate-700 text-center">
          React 2D Game Engine is designed to be fast and lightweight, ensuring
          optimal performance for your games. With a minimal footprint and
          efficient rendering, you can create smooth and responsive gaming
          experiences without compromising on quality.
        </p>
      </div>
    </div>
  );
}
