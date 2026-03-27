import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50";

  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white",
    secondary:
      "bg-neutral-100 hover:bg-neutral-200 text-neutral-900",
    outline:
      "border border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 shadow-sm",
  };

  const combinedClasses = `${baseStyles} ${className.includes(variants[variant]) ? '' : variants[variant]} ${className}`;

  if (to) {
    const isExternal = to.startsWith("http") || to.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
