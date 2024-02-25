import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo.webp"
      alt="Atenea Logo"
      width={64}
      height={64}
      className="h-auto w-auto object-contain"
      priority={true}
    />
  );
}
