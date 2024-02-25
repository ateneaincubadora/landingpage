export default function Form() {
  return (
    <form className="animate-fade-left animate-delay-500 flex w-full flex-col items-start gap-y-4 rounded-lg bg-secondary/80 p-4 shadow-xl">
      <label className="flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">
          Nombre y Apellido
        </span>
        <input
          type="text"
          className="rounded-full border-b-4 border-r-2 border-transparent  px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary "
        />
      </label>

      <label className="flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">Email</span>
        <input
          type="text"
          className="rounded-full border-b-4 border-r-2 border-transparent  px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary"
        />
      </label>

      <label className="flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">
          Envianos tu mensaje:
        </span>
        <textarea className="h-24 resize-none rounded-3xl  border-b-4 border-r-2 border-transparent px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary"></textarea>
      </label>

      <button className="self-end rounded-xl border border-b-4 border-r-2 border-secondary bg-white px-2  py-3 font-bold text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary/60 hover:text-white ">
        ENVIAR
      </button>
    </form>
  );
}
