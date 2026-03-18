import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// already there:
import { getServiceBySlug, services } from "@/data/services";
import { getProductDetail, getProductImage } from "@/data/products"; // ⬅ add this

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Star, Package, Globe, Shield, Truck } from "lucide-react";
import dehydratedproductsImg from "@/assets/products/de.webp";
import fruitsvegetablesImg from "@/assets/products/fruitsvegetables.jpg";
import spicesImg from "@/assets/products/spices.jpg";
import grainsImg from "@/assets/products/grains.jpg";



const categoryImageMap: Record<string, string> = {
  "grains": grainsImg,
  "dehydrated-products": dehydratedproductsImg,
  "fruits-vegetables": fruitsvegetablesImg,
  "spices": spicesImg,
};

const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = useMemo(() => getServiceBySlug(slug || ""), [slug]);

  useEffect(() => {
    if (!service) return;
    const title = `Udaan | ${service.title} Details`;
    const description = `${service.title} – ${service.description}. Explore full product list with specifications and images by Udaan.`;

    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `/services/${service.slug}`);

    // Structured data (ItemList of products)
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${service.title} products`,
      itemListElement: service.products.map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name,
          brand: 'Udaan',
          category: service.title,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Category not found</h1>
            <p className="text-muted-foreground">The service you are looking for does not exist.</p>
            <Button asChild>
              <Link to="/">Go back home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-pulse opacity-30 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          {/* <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/80 animate-fade-in">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#services" className="hover:text-accent transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav> */}

          <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in delay-200">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float">
                  <Icon className="h-10 w-10 text-accent" />
                </div>
                <div>
                  <Badge className="bg-accent text-accent-foreground mb-2">Premium Service</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                  <Package className="h-5 w-5 mr-2" />
                  View All Products
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <Link to="/#contactus" className="flex items-center">
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img
                src={categoryImageMap[service.slug]}
                alt={`${service.title} showcase`}
                className="w-full h-80 object-cover rounded-2xl shadow-hero animate-scale-in delay-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, label: "Countries Served", value: "50+" },
              { icon: Package, label: "Products Available", value: service.products.length.toString() },
              { icon: Shield, label: "Quality Certified", value: "100%" },
              { icon: Truck, label: "On-Time Delivery", value: "98%" }
            ].map((stat, index) => (
              <Card key={stat.label} className="text-center p-6 hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Products Grid */}
            <article className="lg:col-span-3 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-foreground">Our Products</h2>
                <Badge variant="outline" className="text-secondary border-secondary">
                  {service.products.length} Products Available
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.products.map((product, index) => {
                  const productSlug = toSlug(product);

                  // get specific product image (falls back to category image if not found)
                  const imgSrc =
                    getProductImage(service.slug, productSlug) ||
                    categoryImageMap[service.slug];

                  return (
                    <Link
                      to={`/services/${service.slug}/${productSlug}`}
                      key={product}
                      className="group block animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={`View details for ${product}`}
                    >
                      <Card className="h-full overflow-hidden border-border/50 bg-card hover:shadow-card transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={imgSrc}
                            alt={`${product} - Premium quality export product`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* rest stays the same */}

                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                            Premium
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg text-card-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                            {product}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                            Premium {product.toLowerCase()} from trusted suppliers, quality-checked and export-ready.
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <span className="text-sm font-medium">Premium Quality</span>
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-secondary transition-colors duration-300">
                              View Details →
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Key Features */}
              <Card className="animate-fade-in delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-gradient-ocean text-white animate-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="text-white">Need a Custom Quote?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90 text-sm">
                    Get personalized pricing based on your quantity, destination, and specific requirements.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                    <Link to="/contactus">
                      Contact Our Team
                    </Link>
                  </Button>
                  <div className="text-xs text-white/80 text-center">
                    Response within 24 hours
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card className="animate-fade-in delay-700">
                <CardContent className="p-4 space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link to="/#services">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Services
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link to="/products">
                      <Package className="h-4 w-4 mr-2" />
                      All Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
