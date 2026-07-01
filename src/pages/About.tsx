import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide partnerships spanning 30+ countries for seamless international trade"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring products meet international standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics network guaranteeing on-time shipments across all destinations"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record in international trade with thousands of successful transactions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <section id="about" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-secondary">Udaanexport</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Established with a vision to connect global markets, we are your trusted partner in international trade,
                specializing in export services that bridge continents and create opportunities worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={feature.title} className="group border-0 bg-gradient-card hover:shadow-float transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-fade-in relative overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-20"></div>

                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <feature.icon className="h-8 w-8 text-secondary group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{feature.description}</p>

                    {/* Hover underline effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-hero p-8 md:p-12 animate-scale-in delay-500 hover:shadow-neon transition-all duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-left delay-700">
                  <h3 className="text-3xl font-bold text-foreground mb-6 relative">
                    Our Mission & Vision
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-2">Mission</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        To facilitate seamless international trade by providing exceptional export services,
                        quality products, and reliable logistics solutions that exceed client expectations.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-2">Vision</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        To become the leading global export company, recognized for innovation,
                        integrity, and sustainable business practices that create value for all stakeholders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-ocean rounded-xl p-8 text-white relative overflow-hidden animate-fade-in-right delay-900">
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-float opacity-70"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full animate-float-delayed opacity-50"></div>

                  <h4 className="text-2xl font-bold mb-6 relative">
                    Company Milestones
                    <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group animate-slide-up delay-1000 hover:scale-105 transition-transform duration-300">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 group-hover:animate-pulse-glow"></div>
                      <div>
                        <div className="font-semibold group-hover:text-accent transition-colors duration-300">2022 - Company Founded</div>
                        <div className="text-white/80 text-sm">Started with a vision for global trade</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group animate-slide-up delay-1100 hover:scale-105 transition-transform duration-300">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 group-hover:animate-pulse-glow"></div>
                      <div>
                        <div className="font-semibold group-hover:text-accent transition-colors duration-300">2023 - International Expansion</div>
                        <div className="text-white/80 text-sm">Reached 12+ partner countries</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group animate-slide-up delay-1200 hover:scale-105 transition-transform duration-300">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 group-hover:animate-pulse-glow"></div>
                      <div>
                        <div className="font-semibold group-hover:text-accent transition-colors duration-300">2025 - Digital Transformation</div>
                        <div className="text-white/80 text-sm">Launched online platform for clients</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group animate-slide-up delay-1300 hover:scale-105 transition-transform duration-300">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 group-hover:animate-pulse-glow"></div>
                      <div>
                        <div className="font-semibold group-hover:text-accent transition-colors duration-300">2025 - Industry Leadership</div>
                        <div className="text-white/80 text-sm">100+ successful shipments annually</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
