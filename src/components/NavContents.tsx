"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Thesis", href: "/thesis" },
  { label: "Contact", href: "/contact" },
];

export function NavContents() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function linkClass(href: string) {
    const active = pathname === href || pathname.startsWith(href + "/");
    return `text-sm transition-colors ${active ? "text-amber-400" : "text-zinc-400 hover:text-zinc-100"}`;
  }

  return (
    <>
      {/* Desktop — shown at md and up */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={linkClass(link.href)}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile — hamburger + dropdown */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-44 bg-[#0a0a0a] border border-zinc-800 rounded-md py-1 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 ${linkClass(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
