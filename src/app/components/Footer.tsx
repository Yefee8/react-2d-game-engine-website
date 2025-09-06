import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-indigo-500/10 py-3 max-md:px-4 flex justify-center">
      <div className="container flex justify-between gap-4">
        <h1 className="text-2xl font-medium text-left">React 2D Game Engine</h1>

        <Link href="https://github.com/Yefee8" target="_blank">
          <button className="text-blue-500 duration-100 text-right hover:bg-blue-500/20 p-1 rounded-lg cursor-pointer font-mono">
            Made by Yefee
          </button>
        </Link>
      </div>
    </footer>
  );
}
