import { NavItem } from "./NavItem";
import { Leaf } from "lucide-react";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Leaf className="h-6 w-6 text-white" />
      <span className="text-white">Agro L'onious</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.icon}
        {item.title}
      </NavItem>
    ))}
  </nav>
);