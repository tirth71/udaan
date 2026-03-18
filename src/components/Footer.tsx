import { Button } from "@/components/ui/button";
import { Ship, Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/", isRoute: true },
        { name: "About Us", href: "/#about", isRoute: false },
        { name: "Products", href: "/products", isRoute: true },
        { name: "Contact", href: "/#contact", isRoute: false },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", href: "/#services", isRoute: false },
        { name: "Grains & Pluses & Millets", href: "/services/grains", isRoute: true },
        { name: "Dehydrated Products", href: "/services/dehydrated-products", isRoute: true },
        { name: "Fruits & Vegetable", href: "/services/fruits-vegetables", isRoute: true },
        { name: "Spices", href: "/services/spices", isRoute: true },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <Ship className="h-8 w-8 text-accent animate-float group-hover:animate-float-delayed transition-all duration-300" />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent group-hover:opacity-90 transition-opacity duration-300">Udaan</span>
              </Link>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner in international trade, connecting markets globally with 
                excellence in export services and reliable logistics solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground/90">+91 95106 14306</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground/90">official.udaanexport@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground/90">Surat , Gujrat , India</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-6 text-accent">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-smooth"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-accent transition-smooth"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for the latest industry insights and export opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Udaan. All rights reserved.

                     </div>
              {/* Middle */}
    <div className="text-primary-foreground/80 text-sm md:w-1/3 text-center">
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/tirth-savaliya-115187252"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        Tirthsavaliya
      </a>
    </div>
        
     
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Floating "Developed by" Section */}
      <div>
       
      </div>
    </footer>
  );
};

export default Footer;