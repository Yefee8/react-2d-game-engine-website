import { GiMagicBroom } from "react-icons/gi";

export default function EasyToUse() {
  return (
    <div className="h-screen container flex flex-row-reverse items-center gap-4 py-16">
      <div className="w-1/2 flex justify-center items-center">
        <GiMagicBroom className="text-[250px] text-[#ffc107]" />
      </div>

      <div className="w-1/2 flex flex-col items-center gap-8">
        <h3 className="text-2xl font-medium">Easy To Use</h3>
        <p className="text-lg text-slate-700 text-center">
          React 2D Game Engine is designed to be easy to use, allowing
          developers to quickly create and deploy 2D games with minimal effort.
          Its intuitive API and comprehensive documentation make it accessible
          for both beginners and experienced developers.
        </p>
      </div>
    </div>
  );
}
