import { FaCodePullRequest } from "react-icons/fa6";

export default function OpenSource() {
  return (
    <div className="h-screen container flex items-center gap-4 py-16">
      <div className="w-1/2 flex justify-center items-center">
      <FaCodePullRequest className="text-[200px] text-slate-800" />

      </div>

      <div className="w-1/2 flex flex-col items-center gap-8">
        <h3 className="text-2xl font-medium">Open-source and MIT Licensed</h3>
        <p className="text-lg text-slate-700 text-center">
          React 2D Game Engine is released under the MIT License, making it
          open-source and free to use for both personal and commercial
          projects. You can modify, distribute, and use the engine without any
          restrictions, fostering a collaborative and innovative development
          environment.
        </p>
      </div>
    </div>
  );
}
