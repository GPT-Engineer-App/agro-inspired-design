import { NavItem } from "./NavItem";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <img src="/images/agro-lonious-logo.png" alt="Agro L'onious" className="h-8 w-auto" />
      <span className="text-white">Agro L'onious</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);