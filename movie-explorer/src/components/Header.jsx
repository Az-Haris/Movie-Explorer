import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-black text-white">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            to="/movies"
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
          >
            Movies
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="sm:hidden border text-white p-1 rounded-md"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-black text-white p-6 transform transition-transform duration-300 sm:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Menu</h2>

          <button
            onClick={closeDrawer}
            className="p-2 rounded-md hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav>
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={closeDrawer}
                  className="block text-lg hover:text-red-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;
