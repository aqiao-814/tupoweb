import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Footer({ className = "" }) {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Learn more", href: "/learn" },
    { title: "Coming soon", href: "/soon" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:ttstudio27@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22,5L12,13L2,5" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/timtam_studio/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer className={`w-full bg-primary-800 px-6 py-10 mt-auto ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">TUPO</h3>
            <p className="text-secondary-300 text-body">
              Pushing creative boundaries. Connecting people with limitless
              potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-300 text-sm">
              © {currentYear} TUPO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
