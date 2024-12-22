import { motion } from "framer-motion";
import { Display, Body } from "../components/common/Typography";
import { Paintbrush, Layers, LayoutGrid, Package } from "lucide-react";

export function LearnMorePage() {
  return (
    <div className="min-h-screen bg-primary-900 mb-20">
      {/* Hero Section */}
      <section className="pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Display className="text-center mb-12 text-white">
            Limitless Box
          </Display>

          {/* Display Case Introduction */}
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Display Case
            </h2>
            <Body className="text-secondary-300 text-xl mb-12 text-center max-w-2xl mx-auto">
              Your treasures, infinitely showcased
            </Body>
            <div className="relative h-80 mb-8 overflow-hidden rounded-lg">
              <img
                src="/Limitless Case Render Medium Black.jpg"
                alt="Limitless Box Display Case"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900 from-5% via-transparent via-30% to-primary-900 to-95% opacity-60" />
            </div>
          </section>

          {/* Size Options */}
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Available Sizes
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-primary-800 p-8 rounded-lg">
                <div className="relative h-64 overflow-hidden rounded-lg mb-8">
                  <img
                    src="/Limitless Case Render Small.jpg"
                    alt="Small Display Case"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl text-white mb-3 text-center">Small</h3>
                <p className="text-secondary-300 text-center">
                  120 mm &times; 173 mm &times; 196 mm
                </p>
              </div>
              <div className="bg-primary-800 p-8 rounded-lg">
                <div className="relative h-64 overflow-hidden rounded-lg mb-8">
                  <img
                    src="/Medium Case Render.png"
                    alt="Medium Display Case"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl text-white mb-3 text-center">Medium</h3>
                <p className="text-secondary-300 text-center">
                  297 mm &times; 173 mm &times; 196 mm
                </p>
              </div>
            </div>
          </section>

          {/* Effortless Customization */}
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Effortless Customization
            </h2>
            <div className="bg-primary-800 p-8 rounded-lg">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-8">
                <img
                  src="/Cases stacked .jpg"
                  alt="Stacked Display Cases"
                  className="w-full h-full object-cover"
                />
              </div>
              <Body className="text-secondary-300 text-xl text-center">
                Magnetic stacking, One plug. Infinite possibilities.
              </Body>
            </div>
          </section>

          {/* Personalization Features */}
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Personalize Your Space
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col items-center text-center">
                <LayoutGrid className="w-16 h-16 text-white mb-6" />
                <p className="text-secondary-300 text-lg">
                  Customizable Layouts
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Layers className="w-16 h-16 text-white mb-6" />
                <p className="text-secondary-300 text-lg">Stackable Design</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Paintbrush className="w-16 h-16 text-white mb-6" />
                <p className="text-secondary-300 text-lg">
                  Swappable Backdrops
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="w-16 h-16 text-white mb-6" />
                <p className="text-secondary-300 text-lg">Multiple Sizes</p>
              </div>
            </div>
          </section>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-40 mb-40"
          >
            <p className="text-4xl font-semibold text-white mb-4">
              Infinite possibilities.
            </p>
            <p className="text-secondary-300 text-xl">
              Swap mirrors for custom backdrops. Make it uniquely yours.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default LearnMorePage;
