import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

type ContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: string;
};

const storeSubmission = (data: ContactSubmission) => {
  try {
    const key = "udaan_contact_submissions";
    const existing = localStorage.getItem(key);
    const list: ContactSubmission[] = existing ? JSON.parse(existing) : [];
    list.push(data);
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to store contact submission", err);
  }
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 95106 14306"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["official.udaanexport@gmail.com"],
      description: "Send us your inquiries anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Surat", "Gujarat, IN 395010"],
      description: "Visit our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here when you need us",
    },
  ];

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const submission: ContactSubmission = {
      firstName: (formData.get("firstName") as string) || "",
      lastName: (formData.get("lastName") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      subject: (formData.get("subject") as string) || "",
      message: (formData.get("message") as string) || "",
      createdAt: new Date().toISOString(),
    };

    // Store locally
    storeSubmission(submission);

    // Send via EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully 🎉");
          setLoading(false);
          form.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌ " + (error?.text || ""));
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your global export journey? Contact our experienced team today
            for personalized solutions and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="group hover:shadow-float transition-all duration-500 animate-fade-in hover:scale-105 border-0 relative overflow-hidden hover:-rotate-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-10" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                        <info.icon className="h-6 w-6 text-secondary group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">
                          {info.description}
                        </p>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-foreground font-medium group-hover:text-secondary transition-colors duration-300"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={sendEmail}>
              <Card className="shadow-hero animate-fade-in delay-500 hover:shadow-neon transition-all duration-700 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-pulse opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input name="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input name="phone" type="tel" placeholder="+91 95106 14306" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input name="company" placeholder="Your Company Inc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      name="subject"
                      placeholder="Export inquiry for agricultural products"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      name="message"
                      placeholder="Please provide details about your export requirements, quantities, destinations, and timeline..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full group relative overflow-hidden animate-slide-up delay-700"
                    disabled={loading}
                  >
                    <span className="relative z-10">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

