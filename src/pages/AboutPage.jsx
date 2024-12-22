import { motion } from "framer-motion";
import { Display, Body } from "../components/common/Typography";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-900 mb-20">
      {/* Main Content */}
      <section className="pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Display className="text-center mb-12 text-white">About TUPO</Display>
          <Body className="text-secondary-300 text-lg mb-12">
            TUPO is dedicated to pushing creative boundaries and connecting
            people with limitless potential. Our innovative display solutions
            are designed to showcase your most precious items in ways that
            inspire and captivate.
          </Body>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mb-20">
        <img
          src="/Ship Angle View.JPG"
          alt="Limitless Display Showcase"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900" />
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Limitless Potential Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Limitless Potential
            </h2>
            <Body className="text-secondary-300 text-lg mb-8">
              As a collector, we asked ourselves: &quot;How can people stylishly
              show their stuff?&quot; Too often, cherished items lose their
              shine, blending into the background. We wanted to create something
              that transforms a single piece into a standout feature—capturing
              attention no matter the setting.
            </Body>
          </motion.div>

          {/* Showcase Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img
                src="/Front View.jpg"
                alt="Front View Display"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-transparent to-primary-900 opacity-60" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img
                src="/Gundam Hangar.JPG"
                alt="Gundam Display Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-transparent to-primary-900 opacity-60" />
            </div>
          </motion.div>

          {/* Inspired Creations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Inspired Creations
            </h2>
            <div className="bg-primary-800 rounded-lg p-6">
              <h3 className="text-xl text-white mb-4">
                Tim Tam&apos;s Gundam World Cup Entry
              </h3>
              <Body className="text-secondary-300 text-lg">
                &quot;A Reflection of Our Brothers&quot; replicates the sight of
                an endless army, poised for action. Using the infinity mirror
                effect, the hangar becomes a gateway to infinite possibilities,
                each stand ready for battle.
              </Body>
            </div>
          </motion.div>

          {/* Foundation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-16"
          >
            <Body className="text-secondary-300 text-lg">
              Founded on the principles of excellence and innovation, we strive
              to create products that transform the way people experience and
              share their collectibles. Our flagship product, the Limitless Box,
              represents our commitment to quality and revolutionary design.
            </Body>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center"
          >
            <p className="text-white text-2xl font-semibold">
              Your showcase deserves no less.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutPage;
