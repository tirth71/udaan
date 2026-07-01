import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-card border-b border-border/50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
               src={logo}
              alt="Udaan Export Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={`${item.name}-${index}`}
                  to={item.href}
                  className={`relative transition-colors duration-300 font-medium group ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Button asChild variant="ocean" size="sm" className="hover:scale-105 transition-transform duration-300">
              <Link to="/contactus">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up bg-white/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={`${item.name}-${index}`}
                    to={item.href}
                    className={`font-medium px-2 py-1 rounded-lg animate-fade-in-left transition-colors duration-300 ${
                      isActive
                        ? "text-primary bg-secondary/10"
                        : "text-foreground hover:text-primary hover:bg-secondary/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button asChild variant="ocean" size="sm" className="mx-2 w-fit animate-scale-in delay-500">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
