import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors link-transition flex items-center gap-2",
        isActive
          ? "text-gold font-semibold"
          : "text-white hover:text-yellow-200",
        className,
      )
    }
  >
    {children}
  </NavLink>
);