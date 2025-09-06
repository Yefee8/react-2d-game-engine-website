import { FaCodePullRequest } from "react-icons/fa6";

export default function OpenSource() {
  return (
    <div
      id="open-source"
      data-aos="fade-right"
      className="min-h-screen max-md:justify-center container flex max-md:flex-col items-center gap-4 py-16"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <FaCodePullRequest className="text-[200px] md:text-[100px] text-slate-800" />
      </div>

      <div
        data-aos="fade-left"
        className="md:w-1/2 flex flex-col items-center gap-8"
      >
        <h3 className="text-2xl font-medium">Open-source and MIT Licensed</h3>
        <p className="text-lg text-slate-700 text-center">
          React 2D Game Engine is fully open source and licensed under MIT,
          giving you complete freedom. You can open a PR and directly contribute
          to the project, modify it however you like, or even publish your own
          version to npm. Whether for personal or commercial use, you are in
          full control.
        </p>
      </div>
    </div>
  );
}
