import Link from "next/link";
import { NavContents } from "./NavContents";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-[#ededed] hover:text-amber-400 transition-colors"
        >
          toddqualiano.com
        </Link>
        <NavContents />
      </div>
    </nav>
  );
}
