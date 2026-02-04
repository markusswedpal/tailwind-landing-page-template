import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
  <div className="relative z-10 flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center gap-3">
            <Logo />
            <Link href="/" className="text-black font-semibold text-lg relative z-20">
              Curbits
            </Link>
          </div>

          {/* Center navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <Link href="/" className="text-black hover:text-gray-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-700 font-medium">
              About
            </Link>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Key features
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Request a demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
