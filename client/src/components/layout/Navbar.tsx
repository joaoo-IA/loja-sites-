import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problema", href: "#problem" },
    { name: "Solução", href: "#solution" },
    { name: "Processo", href: "#process" },
    { name: "Serviços", href: "#services" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-heading tracking-tight text-primary">
          Creft<span className="text-blue-600">Sites</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary text-white gap-2">
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
