import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import globalTrade from "@/assets/global-trade-D7MRtin6.jpg";
import qualityControl from "@/assets/quality-control-CSJAzth2.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, CheckCircle, Package, Truck, Shield, Award, Globe, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ae from "@/assets/flags/ae.svg";
import sa from "@/assets/flags/sa.svg";
import gb from "@/assets/flags/gb.svg";
import us from "@/assets/flags/us.svg";
import de from "@/assets/flags/de.svg";
import jp from "@/assets/flags/jp.svg";
import kr from "@/assets/flags/kr.svg";
import my from "@/assets/flags/my.svg";
import sg from "@/assets/flags/sg.svg";
import qa from "@/assets/flags/qa.svg";
import om from "@/assets/flags/om.svg";
import kw from "@/assets/flags/kw.svg";
import bh from "@/assets/flags/bh.svg";
import ca from "@/assets/flags/ca.svg";
import au from "@/assets/flags/au.svg";
import nl from "@/assets/flags/nl.svg";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

//const certificates = [iso, fssai, apeda, usda, msme, spiceBoard];


const exportCountries = [
  { flag: ae, name: "UAE" },
  { flag: sa, name: "Saudi Arabia" },
  { flag: gb, name: "UK" },
  { flag: us, name: "USA" },
  { flag: de, name: "Germany" },
  { flag: jp, name: "Japan" },
  { flag: kr, name: "South Korea" },
  { flag: my, name: "Malaysia" },
  { flag: sg, name: "Singapore" },
  { flag: qa, name: "Qatar" },
  { flag: om, name: "Oman" },
  { flag: kw, name: "Kuwait" },
  { flag: bh, name: "Bahrain" },
  { flag: ca, name: "Canada" },
  { flag: au, name: "Australia" },
  { flag: nl, name: "Netherlands" },
];



const testimonials = [
  { name: "Ahmed Al-Rashid", company: "Gulf Trading Co., UAE", text: "Exceptional quality rice and spices. GlobalExim has been our trusted supplier for over 3 years. Their attention to packaging and timely delivery is remarkable.", rating: 5 },
  { name: "Sarah Chen", company: "Asia Pacific Foods, Singapore", text: "Their consistent quality and timely delivery make them our go-to partner for Indian agricultural products. The team is very responsive and professional.", rating: 5 },
  { name: "James Wilson", company: "UK Fresh Imports, London", text: "The freshness and packaging quality of their vegetables is unmatched. We've increased our order volume by 3x since partnering with them.", rating: 5 },
  { name: "Yuki Tanaka", company: "Tokyo Spice House, Japan", text: "Best quality turmeric and spices we've sourced from India. GlobalExim maintains the highest standards consistently across every shipment.", rating: 5 },
];


const processSteps = [
  { icon: Leaf, title: "Farm Sourcing", desc: "Direct sourcing from certified farms across India's prime agricultural regions." },
  { icon: CheckCircle, title: "Quality Testing", desc: "Rigorous multi-stage quality checks at NABL-accredited labs." },
  { icon: Package, title: "Processing & Packing", desc: "State-of-the-art processing with export-grade packaging standards." },
  { icon: Truck, title: "Global Shipping", desc: "Temperature-controlled logistics with real-time tracking to your port." },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = testimonials[testimonialIdx];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Services />
        <WhyChooseUs />
        <Contact /> */}



      
    {/* Why Choose Us */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
        Our Advantages
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
        Why Choose <span className="text-blue-400">Udaan Export</span>
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        We combine quality, reliability, and global reach to deliver the best
        agricultural products.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: Shield,
          title: "Certified Quality",
          desc: "APEDA, FSSAI & ISO certified products meeting international food safety standards.",
        },
        {
          icon: Truck,
          title: "Global Logistics",
          desc: "Seamless shipping to 30+ countries with temperature-controlled delivery.",
        },
        {
          icon: Award,
          title: "Premium Grade",
          desc: "Only the finest grade products from India's top agricultural regions.",
        },
        {
          icon: Globe,
          title: "Worldwide Reach",
          desc: "Serving importers, distributors, and retailers across 5 continents.",
        },
      ].map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-white border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-5">
              <Icon
                size={30}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>

            <h3 className="text-xl font-bold mb-3">{card.title}</h3>

            <p className="text-gray-600 leading-7">
              {card.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>









      <section className="py-14 bg-background">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Proven Global Trade <span className="text-primary">Excellence</span>
            </h2>

            <p className="text-muted-foreground max-w-lg leading-relaxed text-lg">
              With over 50 successful shipments across 30+ countries...
            </p>

            <div className="flex gap-6 pt-4 justify-center items-center">
              <div className="bg-muted border border-border rounded-xl px-8 py-5 shadow-sm w-full">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>

              <div className="bg-[#F9F2EA] border border-border rounded-xl px-8 py-5 shadow-sm w-full">
                <p className="text-3xl font-bold text-[#CF8B39]">100+</p>
                <p className="text-sm text-muted-foreground">Active Partners</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={globalTrade}
              alt="Global Trade"
              className="rounded-2xl shadow-xl object-cover w-full h-[380px]"
            />
          </motion.div>

        </div>
      </section>






  <section className="py-12 bg-muted">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Our 6-Step <span className="text-primary">Quality Process</span>
            </h2>

            <p className="text-muted-foreground mt-3 max-w-xl">
              From sourcing to delivery, every step ensures consistency,
              compliance, and customer satisfaction.
            </p>

            {/* STEPS */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              {[
                {
                  title: "Source & Verify",
                  desc: "Partner with certified farms and yards. Verify credentials and quality standards."
                },
                {
                  title: "Inspect & Grade",
                  desc: "Third-party inspection and grading according to international standards."
                },
                {
                  title: "Process & Package",
                  desc: "Custom processing, packaging, and labeling as per buyer specifications."
                },
                {
                  title: "Document & Certify",
                  desc: "Complete export documentation including COO, phytosanitary, and test certificates."
                },
                {
                  title: "Ship & Track",
                  desc: "Coordinate with trusted carriers and provide real-time tracking updates."
                },
                {
                  title: "Deliver & Support",
                  desc: "Ensure smooth customs clearance and provide post-delivery support."
                }
              ].map((step, i) => (

                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="flex gap-4 pb-6"
                >
                  {/* NUMBER */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                    {i + 1}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg relative"
          >
            <img
              src={qualityControl}
              alt="Quality Testing"
              className="w-full h-full object-cover"
            />

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-5 left-5 bg-white rounded-xl shadow-md px-4 py-3 text-sm"
            >
              <p className="font-semibold text-primary">
                ISO Quality Certified
              </p>
              <p className="text-muted-foreground text-xs">
                ISO 9001:2015 certified processes ensuring consistent quality
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>






    {/* Export Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Exporting To <span className="text-primary">30+ Countries</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Our products reach customers across the Middle East, Europe, Asia, and the Americas.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {exportCountries.map((country, i) => (
              <motion.div
                key={country.name}
                className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl shadow-sm border border-border hover:shadow-md hover:scale-105 transition-all"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-4 object-cover rounded-sm border"
                />

                <span className="text-sm font-medium text-foreground">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>









 <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Client Feedback
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </motion.div>

        {/* SLIDER */}
        <div
          className="max-w-2xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIdx}
              className="bg-muted rounded-2xl p-10 text-center shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >

              {/* ⭐ STARS */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: current?.rating || 0 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-foreground text-lg italic leading-relaxed mb-6">
                "{current?.text}"
              </p>

              {/* AVATAR */}
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">
                  {current?.name?.[0]}
                </span>
              </div>

              {/* NAME */}
              <p className="font-bold text-foreground">{current?.name}</p>

              {/* COMPANY */}
              <p className="text-sm text-muted-foreground">
                {current?.company}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-8">

            {/* PREV */}
            <button
              onClick={() =>
                setTestimonialIdx((p) =>
                  (p - 1 + testimonials.length) % testimonials.length
                )
              }
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === testimonialIdx
                      ? "bg-primary w-6"
                      : "bg-border w-2.5"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={() =>
                setTestimonialIdx((p) => (p + 1) % testimonials.length)
              }
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </section>













      

      </main>
      <Footer />
    </div>
  );
};

export default Index;
