import MenuSocials from "./menu-socials";
import Menu from "./menu";

interface AsideMobileProps {
  isOpen: boolean;
}

export default function AsideMobile({ isOpen }: AsideMobileProps) {
  return (
    <aside
      className={`${isOpen ? "right-0" : "-right-full"}  fixed top-0 flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-hidden bg-black/80 transition-all duration-200 ease-in-out lg:hidden`}
    >
      <Menu />

      <MenuSocials />
    </aside>
  );
}
