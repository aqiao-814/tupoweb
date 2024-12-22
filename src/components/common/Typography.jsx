import PropTypes from "prop-types";

export function Display({ children, className = "" }) {
  return (
    <h1 className={`text-display font-semibold tracking-tight ${className}`}>
      {children}
    </h1>
  );
}

export function Headline({ children, className = "" }) {
  return (
    <h2 className={`text-headline font-semibold ${className}`}>{children}</h2>
  );
}

export function Body({ children, className = "" }) {
  return <p className={`text-body ${className}`}>{children}</p>;
}

// Add PropTypes
const textPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display.propTypes = textPropTypes;
Headline.propTypes = textPropTypes;
Body.propTypes = textPropTypes;
