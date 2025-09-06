import { FaArrowDown } from "react-icons/fa6";

export default function Entry() {
  return (
    <div id="entry" className="h-[calc(100vh-58px)] relative w-full flex flex-col justify-center items-center">
      <div className="container flex justify-center items-center h-[calc(100vh-58px)] max-md:px-4">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-bold">React 2D Game Engine</h2>
          <p className="text-base text-center md:text-lg text-slate-700">
            A powerful and flexible 2D game engine built with React and
            TypeScript.
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 animate-bounce flex flex-col items-center gap-2 ">
        <div className="text-base font-medium">Start Exploring</div>
        <FaArrowDown className="text-2xl" />
      </div>
    </div>
  );
}
