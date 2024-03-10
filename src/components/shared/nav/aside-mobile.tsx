import MenuSocials from "./menu-socials";
import Menu from "./menu";
import { cn } from "@/utils/cn";

interface AsideMobileProps {
  isOpen: boolean;
}

export default function AsideMobile({ isOpen }: AsideMobileProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-hidden bg-black/80 transition-all duration-700 ease-in-out lg:hidden",
        isOpen ? "opacity-100" : "pointer-events-none -z-20 opacity-0",
      )}
    >
      <Menu />

      <MenuSocials />
    </aside>
  );
}
