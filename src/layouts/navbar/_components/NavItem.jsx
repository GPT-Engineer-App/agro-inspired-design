import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-green-800 font-semibold"
          : "text-gray-600 hover:text-green-700",
        className,
      )
    }
  >
    {children}
  </NavLink>
);