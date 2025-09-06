import Link from "next/link";
import { FaGithub, FaNpm } from "react-icons/fa6";

export default function Header() {
  const links = [
    { name: "Demos", href: "/demos" },
    {
      name: "Documentation",
      href: "https://github.com/Yefee8/react-2d-game-engine/blob/master/README.md",
      target: "_blank",
    },
  ];

  return (
    <header className="w-full border-b-2 border-indigo-500/10 py-3 max-md:px-4 flex justify-center">
      <div className="container flex max-md:flex-col gap-4 flex-wrap items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-medium">React 2D Game Engine</h1>
        </Link>

        <div className="flex gap-4 flex-wrap items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-blue-500 font-mono hover:text-blue-600 text-base duration-100"
              target={link.target}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-2 flex gap-2">
            <Link
              href="https://github.com/yefee8/react-2d-game-engine"
              className="text-black text-2xl duration-100"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.npmjs.com/package/react-2d-game-engine"
              className="text-[#ca3736] text-2xl duration-100"
            >
              <FaNpm />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
