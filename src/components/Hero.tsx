import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-pulse animate-pulse-glow opacity-30"></div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-all duration-[10s] ease-out"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero animate-shimmer"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-80"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-float-delayed opacity-90"></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-secondary rounded-full animate-float opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-accent animate-rotate-slow" />
              <div className="absolute inset-0 h-16 w-16 bg-accent rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in-left">Connecting Markets</span>
            <span className="block text-accent animate-fade-in-right delay-500 hover:animate-wave">Globally</span>
          </h1>
          
          {/* Shimmer effect text */}
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in delay-700 leading-relaxed">
              Your trusted partner in international trade, delivering excellence in export services across continents
            </p>
            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-1000">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 group relative overflow-hidden">
              <a href='/#services' className="relative z-10">Explore Our Services</a>
              <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary hover:shadow-neon transition-all duration-500 hover:scale-110">
              <a href='/#contact' className="relative z-10">Contact Us Today</a>
            </Button>
          </div>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up delay-1200 hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:animate-pulse-glow">5+</div>
              <div className="text-white/80 text-lg">Years of Excellence</div>
              <div className="w-16 h-1 bg-accent mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="text-center animate-slide-up delay-1400 hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:animate-pulse-glow">50+</div>
              <div className="text-white/80 text-lg">Shipments per Year</div>
              <div className="w-16 h-1 bg-accent mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="text-center animate-slide-up delay-1600 hover:scale-110 transition-transform duration-300 group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:animate-pulse-glow">12+</div>
              <div className="text-white/80 text-lg">Partner Countries</div>
              <div className="w-16 h-1 bg-accent mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden group-hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-accent animate-float"></div>
          <div className="absolute inset-0 bg-gradient-shimmer translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
        </div>
        <ArrowDown className="h-4 w-4 text-white/70 mx-auto mt-2 group-hover:text-accent transition-colors duration-300 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;