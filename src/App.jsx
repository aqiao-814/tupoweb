import { Routes, Route } from "react-router-dom";
import ProductLayout from "./components/layout/ProductLayout";
import HeroSection from "./components/ui/HeroSection";
import { AboutPage } from "./pages/AboutPage";
import { LearnMorePage } from "./pages/LearnMorePage";
import { ComingSoonPage } from "./pages/ComingSoonPage";

function App() {
  return (
    <ProductLayout>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learn" element={<LearnMorePage />} />
        <Route path="/soon" element={<ComingSoonPage />} />
      </Routes>
    </ProductLayout>
  );
}

export default App;
