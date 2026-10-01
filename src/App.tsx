import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Business } from "./pages/Business";
import { HomeAndFamily } from "./pages/HomeAndFamily";
import { Services } from "./pages/Services";
import { AIPhoneAgents } from "./pages/AIPhoneAgents";
import { Consulting } from "./pages/Consulting";
import { WebDesign } from "./pages/WebDesign";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/home-and-family" element={<HomeAndFamily />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-phone-agents" element={<AIPhoneAgents />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Retired URLs from the previous site */}
        <Route path="/services/web-builds" element={<Navigate to="/services/web-design" replace />} />
        <Route path="/retainers" element={<Navigate to="/services/consulting" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
