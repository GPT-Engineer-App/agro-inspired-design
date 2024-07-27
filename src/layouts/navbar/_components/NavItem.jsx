import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors link-transition",
        isActive
          ? "text-gold font-semibold"
          : "text-soft-beige hover:text-yellow-300",
        className,
      )
    }
  >
    {children}
  </NavLink>
);