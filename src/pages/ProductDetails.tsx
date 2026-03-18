import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug } from "@/data/services";
import { getProductDetail } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agricultureImg from "@/assets/products/agriculture.jpg";
import machineryImg from "@/assets/products/machinery.jpg";
import chemicalsImg from "@/assets/products/chemicals.jpg";
import textilesImg from "@/assets/products/textiles.jpg";

const categoryImageMap: Record<string, string> = {
  "agriculture-products": agricultureImg,
  "electronics-machinery": machineryImg,
  "chemicals-minerals": chemicalsImg,
  "textile-apparel": textilesImg,
};

const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ProductDetails = () => {
  const { slug, product } = useParams<{ slug: string; product: string }>();

  const { service, productName, detail } = useMemo(() => {
    const svc = getServiceBySlug(slug || "");
    if (!svc) return { service: undefined, productName: undefined, detail: undefined };
    const name = svc.products.find((p) => toSlug(p) === (product || ""));
    const d = getProductDetail(svc.slug, product || "");
    return { service: svc, productName: name, detail: d };
  }, [slug, product]);

  useEffect(() => {
    if (!service) return;
    const name = (detail?.name || productName);
    if (!name) return;
    const title = `Udaan | ${name} – ${service.title}`;
    const description = `${name} in ${service.title}. Specifications, high-quality images, and export options by Udaan.`;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `/services/${service.slug}/${toSlug(name)}`);

    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      brand: "Udaan",
      category: service.title,
      image: detail?.image || categoryImageMap[service.slug],
      description,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [service, productName, detail]);
  const name = detail?.name || productName;

  if (!service || !name) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Product not found</h1>
          <p className="text-muted-foreground">The product you are looking for does not exist.</p>
          <Button asChild variant="ocean">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const imgSrc = detail?.image || categoryImageMap[service.slug];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 animate-fade-in">
            {/* <nav aria-label="Breadcrumb" className="mb-6 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Link to="/" className="story-link hover:text-primary">Home</Link>
                <span>/</span>
                <Link to="/#services" className="story-link hover:text-primary">Services</Link>
                <span>/</span>
                <Link to={`/services/${service.slug}`} className="story-link hover:text-primary">{service.title}</Link>
                <span>/</span>
                <span className="text-foreground font-medium">{name}</span>
              </div>
            </nav> */}
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  {name}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Premium {name.toLowerCase()} from our {service.title.toLowerCase()} category. Export-ready, quality-checked, and compliant with international standards.
                </p>
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm w-fit">
                {service.title}
              </Badge>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <Card className="overflow-hidden hover-scale">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={imgSrc}
                      alt={`${name} - ${service.title} by Udaan`}
                      loading="lazy"
                      className="w-full h-80 md:h-96 object-cover bg-muted transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="mb-2">
                        Premium Quality
                      </Badge>
                      <p className="text-white text-sm">Export-ready • Quality Assured • International Standards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Description */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Product Overview
                    <Badge variant="outline">Featured</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {detail?.description || `Premium quality ${name.toLowerCase()} sourced directly from trusted suppliers. Our ${service.title.toLowerCase()} products meet international export standards and undergo rigorous quality control processes to ensure excellence in every shipment.`}
                  </p>
                </CardContent>
              </Card>

              {/* Product Specifications */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-border/50">
                        <span className="font-medium text-foreground">Category</span>
                        <span className="text-muted-foreground">{service.title}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border/50">
                        <span className="font-medium text-foreground">Brand</span>
                        <span className="text-muted-foreground">Udaan</span>
                      </div>
                      {detail?.specs?.slice(0, Math.ceil(detail.specs.length / 2)).map((s) => (
                        <div key={s.label} className="flex justify-between items-center py-3 border-b border-border/50">
                          <span className="font-medium text-foreground">{s.label}</span>
                          <span className="text-muted-foreground">{s.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {detail?.specs?.slice(Math.ceil(detail.specs.length / 2)).map((s) => (
                        <div key={s.label} className="flex justify-between items-center py-3 border-b border-border/50">
                          <span className="font-medium text-foreground">{s.label}</span>
                          <span className="text-muted-foreground">{s.value}</span>
                        </div>
                      )) || (
                        <>
                          <div className="flex justify-between items-center py-3 border-b border-border/50">
                            <span className="font-medium text-foreground">Packaging</span>
                            <span className="text-muted-foreground">Custom as per requirement</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-border/50">
                            <span className="font-medium text-foreground">MOQ</span>
                            <span className="text-muted-foreground">Flexible (bulk orders welcomed)</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-border/50">
                            <span className="font-medium text-foreground">Quality</span>
                            <span className="text-muted-foreground">Export grade, inspected</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-border/50">
                            <span className="font-medium text-foreground">Availability</span>
                            <span className="text-muted-foreground">In stock</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            <aside className="space-y-6">
              {/* Why Choose Us */}
              {/* <Card className="animate-fade-in sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Udaan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((f, index) => (
                      <li key={f} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card> */}

              {/* Quick Contact */}
              <Card className="animate-fade-in bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Get Instant Quote</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Ready to export? Share your quantity, destination, and specifications for a tailored quote within 24 hours.
                  </p>
                  <div className="space-y-3">
                    <Button asChild variant="default" className="w-full">
                      <Link to="/contactus">Request Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${service.slug}`}>View More Products</Link>
                    </Button>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center">
                      📞 Call us: +91 95106 14306<br />
                      ✉️ Email: official.udaanexport@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </section>

          {/* Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex gap-3">
                <Button asChild variant="outline" className="hover-scale">
                  <Link to={`/services/${service.slug}`}>← Back to {service.title}</Link>
                </Button>
                <Button asChild variant="secondary" className="hover-scale">
                  <Link to="/#services">Explore Categories</Link>
                </Button>
              </div>
              {/* <div className="text-sm text-muted-foreground">
                Need help? <Link to="/#contact" className="story-link text-primary">Contact our experts</Link>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
