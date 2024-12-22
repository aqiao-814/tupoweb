import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative h-screen bg-primary-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-20 pb-0 text-center"
      >
        <h1 className="text-display font-bold">Limitless Box</h1>
        <p className="text-subheadline mt-4">
          Your treasures, infinitely showcased
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8 px-6 pt-0 max-w-xl mx-auto"
      >
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img
            src="/Limitless Case Render Medium Black.jpg"
            alt="Product Display"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-10 pb-20 text-center"
      >
        <motion.a
          href="/learn"
          className="inline-flex items-center px-8 py-3 text-sm border border-white rounded-full 
                     hover:bg-white hover:text-black transition-all duration-300 ease-in-out
                     tracking-wider font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          LEARN MORE
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
