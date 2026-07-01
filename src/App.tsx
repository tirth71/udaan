import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this import
import ContactUs from "./components/ContactUs";
import Products from "./pages/Products";
import About from "./components/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/services/:slug/:product" element={<ProductDetails />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
