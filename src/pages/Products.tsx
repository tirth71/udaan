import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Sparkles } from "lucide-react";

const Products = () => { 
  useEffect(() => {
    document.title = "All Products | Udaan - Global Trade & Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our comprehensive range of export products across agriculture, electronics, chemicals, and textiles. Premium quality products for global markets.");
    }

    // Add structured data for products
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "All Products - Udaan Export Services",
      "description": "Comprehensive collection of export products across multiple categories",
      "url": window.location.href,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": product.name,
          "description": product.description,
          "category": services.find(s => s.slug === product.serviceSlug)?.title,
          "url": `/services/${product.serviceSlug}/${product.slug}`
        }))
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const groupedProducts = services.map(service => ({
    service,
    products: products.filter(product => product.serviceSlug === service.slug)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-pulse opacity-30 animate-pulse-glow"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Package className="h-8 w-8 text-accent animate-float" />
                <Sparkles className="h-6 w-6 text-accent animate-float-delayed" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                All Products
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-200">
                Explore our comprehensive range of premium export products across multiple categories
              </p>
              <div className="flex items-center justify-center gap-4 animate-fade-in delay-300">
                <Link to="/">
                  <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent-hover">
                     <Link to="/contactus">
                      Get Quote
                    </Link>  
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid by Category */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {groupedProducts.map((group, categoryIndex) => {
              const ServiceIcon = group.service.icon;
              return (
                <div key={group.service.slug} className="mb-16 animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary">
                      <ServiceIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{group.service.title}</h2>
                      <p className="text-muted-foreground mt-1">{group.service.description}</p>
                    </div>
                    <Link to={`/services/${group.service.slug}`} className="ml-auto">
                      <Button variant="outline" size="sm">
                        View Category
                      </Button>
                    </Link>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {group.products.map((product, productIndex) => (
                      <Link
                        key={product.slug}
                        to={`/services/${product.serviceSlug}/${product.slug}`}
                        className="block group animate-scale-in"
                        style={{ animationDelay: `${categoryIndex * 200 + productIndex * 100}ms` }}
                      >
                        <Card className="h-full overflow-hidden border-border/50 bg-card hover:shadow-card transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="aspect-square overflow-hidden relative">
                            <img
                              src={product.image}
                              alt={`${product.name} - Premium quality export product`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Badge 
                              className="absolute top-3 right-3 bg-secondary text-secondary-foreground"
                            >
                              Premium
                            </Badge>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg text-card-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                              {product.name}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-secondary">
                                {group.service.title}
                              </span>
                              <span className="text-xs text-muted-foreground group-hover:text-secondary transition-colors duration-300">
                                View Details →
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-ocean text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Need Custom Products or Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-fade-in delay-200">
              Contact our team to discuss your specific requirements and get personalized solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                  Get Custom Quote
                </Button>
              </Link>
              <Link to="/#services">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;