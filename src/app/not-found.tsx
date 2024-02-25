import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-screen w-full  flex-col items-center justify-center gap-y-12 bg-intro-background bg-cover bg-right bg-no-repeat px-6 lg:px-28">
      <p className="text-gray-300">404</p>
      <h3 className="text-center text-4xl text-grayish-light lg:text-start lg:text-6xl">
        Página no encontrada
      </h3>
      <Link
        href="/"
        className="font-helvetica-bold cursor-pointer whitespace-nowrap rounded-full  bg-white/40 px-6  py-2 text-sm text-white shadow-xl transition-all hover:scale-110 hover:bg-white hover:text-grayish-dark"
      >
        Volver al incio
      </Link>
    </section>
  );
}
