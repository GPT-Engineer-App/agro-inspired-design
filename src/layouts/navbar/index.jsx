import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-soft-beige">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-earth-green px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <div className="flex items-center gap-4">
          <MobileSheet navItems={navItems} />
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="bg-olive-green text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Agro L'onious. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;