import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Globe2, Users, Star, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control with international certifications and compliance standards",
      stats: "99.8% Quality Rate",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep understanding of global markets and trade regulations across all continents",
      stats: "15+ Years Experience",
      color: "text-blue-600"
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Extensive partnerships and logistics network spanning 30+ countries worldwide",
      stats: "30+ Partner Countries",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 customer support with dedicated account managers for personalized service",
      stats: "24/7 Support",
      color: "text-orange-600"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Consistently high customer satisfaction rates with long-term business relationships",
      stats: "98% Satisfaction",
      color: "text-yellow-600"
    },
    {
      icon: Trophy,
      title: "Industry Leader",
      description: "Award-winning export services recognized by international trade organizations",
      stats: "Industry Awards",
      color: "text-red-600"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-pulse rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-ocean rounded-full blur-3xl opacity-10 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Why Choose <span className="text-secondary relative">
              Udaan
              <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Discover what sets us apart in the competitive world of international trade and export services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={advantage.title} className="group hover:shadow-hero transition-all duration-500 hover:scale-105 border-0 bg-gradient-card animate-fade-in relative overflow-hidden hover:-rotate-1" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-10"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                  <advantage.icon className={`h-8 w-8 ${advantage.color} group-hover:animate-pulse`} />
                  <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30"></div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-secondary transition-colors duration-300 relative">
                  {advantage.title}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500"></div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {advantage.description}
                </p>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-secondary/10 rounded-full text-sm font-semibold text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  {advantage.stats}
                </div>
              </CardContent>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center animate-scale-in delay-1000">
          <Card className="bg-gradient-hero p-8 md:p-12 text-white relative overflow-hidden hover:shadow-neon transition-all duration-700 group">
            {/* Animated background elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-accent rounded-full animate-float opacity-30"></div>
            <div className="absolute top-16 right-16 w-2 h-2 bg-white rounded-full animate-float-delayed opacity-40"></div>
            <div className="absolute bottom-12 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-25"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">
              Ready to Experience Excellence?
              <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our family of satisfied clients and discover why we're the preferred choice for international export services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 group/btn relative overflow-hidden">
                <span className="relative z-10">Start Your Export Journey</span>
                <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary hover:shadow-neon transition-all duration-500 hover:scale-110">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;