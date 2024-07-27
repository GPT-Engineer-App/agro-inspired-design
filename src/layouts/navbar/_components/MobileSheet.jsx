import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";
import { NavItem } from "./NavItem";

export const MobileSheet = ({ navItems }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-white text-earth-green">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="bg-soft-beige">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Leaf className="h-6 w-6 text-gold" />
          <span className="text-earth-green">Agro L'onious</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to} className="text-earth-green">
            {item.icon}
            <span>{item.title}</span>
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);