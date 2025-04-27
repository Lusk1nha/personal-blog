import { NavbarContent } from "./navbar-content";
import { NavbarMenu } from "./navbar-menu";

export function Navbar() {
  return (
    <nav className="bg-navbar-base w-full min-h-13 h-13 rounded-10 p-1.5 border border-navbar-border shadow-navbar relative z-10">
      <NavbarContent />
      <NavbarMenu />
    </nav>
  );
}
