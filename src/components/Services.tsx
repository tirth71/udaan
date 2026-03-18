import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";


const Services = () => {

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-secondary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in exporting high-quality products across diverse industries, 
            ensuring excellence in every shipment worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-hero transition-all duration-500 hover:scale-105 border-0 bg-gradient-card animate-fade-in relative overflow-hidden hover:-rotate-1" style={{ animationDelay: `${index * 200}ms` }}>
             
               {/* Background Image */}
  <img
    src={`/images/services/${service.slug}.jpg`}
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-3 0 transition-opacity duration-500"
  />

  {/* Optional dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/10" />
             
             
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-10"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-secondary rounded-full animate-float-delayed opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${service.color} relative overflow-hidden`}>
                    <service.icon className="h-8 w-8 group-hover:animate-pulse transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30"></div>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-secondary transition-colors duration-300 relative">
                    {service.title}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500"></div>
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center space-x-2 group/feature animate-fade-in-left" style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}>
                          <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 group-hover/feature:animate-pulse-glow group-hover/feature:scale-125 transition-transform duration-300"></div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Our Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.products.map((product, productIndex) => (
                        <span key={product} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${(index * 200) + (productIndex * 50)}ms` }}>
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-full group/btn relative overflow-hidden" aria-label={`Learn more about ${service.title}`}>
                  <Link to={`/services/${service.slug}`} className="flex items-center justify-center w-full relative">
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden animate-scale-in delay-500 hover:shadow-neon transition-all duration-700">
          {/* Animated background elements */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-accent rounded-full animate-float opacity-30"></div>
          <div className="absolute top-16 right-16 w-2 h-2 bg-white rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-12 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-25"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative animate-fade-in delay-700">
            Ready to Export Globally?
            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in delay-900">
            Join thousands of satisfied clients who trust us with their international trade needs. 
            Let's discuss how we can help expand your business worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-1100">
            <Button variant="accent" size="lg" className="text-lg px-8 group relative overflow-hidden">
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary hover:shadow-neon transition-all duration-500 hover:scale-110">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;