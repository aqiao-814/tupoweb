import PropTypes from "prop-types";
import { useScrollTop } from "../../hooks/useScrollTop";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ProductLayout({ children }) {
  useScrollTop();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductLayout;
