import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { WebBuilds } from "./pages/WebBuilds";
import { AIPhoneAgents } from "./pages/AIPhoneAgents";
import { Retainers } from "./pages/Retainers";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-builds" element={<WebBuilds />} />
        <Route path="/services/ai-phone-agents" element={<AIPhoneAgents />} />
        <Route path="/retainers" element={<Retainers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
