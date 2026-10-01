import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E2D5] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Wordmark with Molly Tea inspired seal mark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
        >
          {/* Molly Tea Oriental Seal Mark */}
          <div className="w-8 h-8 rounded-md bg-[#1C3A2D] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-semibold tracking-wider shadow-xs transition-transform group-hover:scale-105">
            袁
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#1B2620] group-hover:text-[#1C3A2D] transition-colors leading-none">
              Alan Yuan
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#76857C] uppercase mt-0.5">
              Software & Research
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Typography Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#46544C]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1C3A2D] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#C59B4B]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#FAF7F2] bg-[#1C3A2D] hover:bg-[#142C22] rounded-lg transition-colors shadow-xs"
          >
            <FileText size={13} />
            View Resume
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-medium text-[#FAF7F2] bg-[#1C3A2D] rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#46544C] hover:text-[#1C3A2D]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E2D5] px-6 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#46544C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1C3A2D] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E8E2D5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#FAF7F2] bg-[#1C3A2D] rounded-lg"
            >
              <FileText size={14} />
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
