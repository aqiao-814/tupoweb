import { motion } from "framer-motion";
import { Display, Body } from "../components/common/Typography";
import { useEffect } from "react";

export function ComingSoonPage() {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen bg-primary-900 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Display className="mb-8">Coming Soon</Display>
        <Body className="text-secondary-300 text-xl mb-12 max-w-2xl mx-auto">
          We&apos;re working on something special. Stay tuned for exciting new
          products and features.
        </Body>

        {/* Tally Form */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            data-tally-src="https://tally.so/embed/3N8NY0?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="267"
            title="TUPO Limitless Box Interest Form"
            className="max-w-lg"
          ></iframe>
        </motion.div>

        <motion.img
          src="/tupo no text.png"
          alt="TUPO Logo"
          className="w-24 h-24 mx-auto invert opacity-50"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </section>
  );
}

export default ComingSoonPage;
