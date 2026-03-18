import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Ship } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
   
    { name: "Products", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-card border-b border-border/50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Ship className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300 group-hover:animate-float" />
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent group-hover:opacity-90 transition-colors duration-300">Udaan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isExternal = item.href.startsWith('/#');
              return isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              );
            })}
            <Button variant="ocean" size="sm" className="hover:scale-105 transition-transform duration-300">
              Get Quote
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
                const isExternal = item.href.startsWith('/#');
                return isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-2 py-1 rounded-lg hover:bg-secondary/10 animate-fade-in-left"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-2 py-1 rounded-lg hover:bg-secondary/10 animate-fade-in-left"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button variant="ocean" size="sm" className="mx-2 w-fit animate-scale-in delay-500"> 
                <Link to="/contact">
                      Get Quote
                    </Link>         
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;