import { Button } from "@/components/ui/button";
import worldMap from "@/assets/world-map.svg";
import Typewriter from "@/components/Typewriter";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Globe, Award, Package, Users } from "lucide-react";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      bgRef.current?.style.setProperty('--parallax-x', `${x}px`);
      bgRef.current?.style.setProperty('--parallax-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const stats = [
    { icon: Globe, value: "30+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Package, value: "100+", label: "Shipments Annually" },
    { icon: Users, value: "500+", label: "Happy Clients" },
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden pt-24 md:pt-28">
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform" style={{ transform: 'translate3d(var(--parallax-x,0), var(--parallax-y,0), 0)' }}>
        <img
          src={worldMap}
          alt="World map background showing global connectivity"
          className="w-full h-full object-cover opacity-20 transition-transform"
          loading="eager"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        {/* Signature animated trade routes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" aria-hidden="true">
          <defs>
            <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          <path d="M100 600 C 400 450, 800 650, 1200 420" stroke="url(#route)" strokeWidth="2" fill="none" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M200 300 C 500 200, 900 400, 1300 250" stroke="url(#route)" strokeWidth="2" fill="none" strokeDasharray="6 10">
            <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="7s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-2xl animate-fade-in">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Trusted Export Partner Since 2022
          </div>

          <h1 className="font-head text-4xl md:text-6xl font-extrabold leading-tight animate-enter">
            Udaan — Connecting the World Through Trade
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-fade-in">
            <Typewriter
              words={[
                "Global Partnerships",
                "Trusted Trade Routes",
                "Seamless Shipping",
                "On-Time Delivery",
              ]}
            />
          </p>

          <p className="mt-5 text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl animate-fade-in">
            From grains and spices to dehydrated produce, we help businesses source, ship, and
            scale across 30+ countries — backed by rigorous quality control and a logistics
            network built for reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
            >
              <Link to="/contactus">Get a Quote</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl animate-fade-in">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-1 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-5 w-5 text-secondary mb-1" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
