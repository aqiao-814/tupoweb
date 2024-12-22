import { motion } from "framer-motion";
import PropTypes from "prop-types";

function RootLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full"
    >
      {/* Add header/navigation here */}
      <main className="container mx-auto px-4">{children}</main>
      {/* Add footer here */}
    </motion.div>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
