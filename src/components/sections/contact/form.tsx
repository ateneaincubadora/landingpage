"use client";

import { cn } from "@/utils/cn";

import IconLoader from "@/components/icons/icon-loader";
import useForm from "./useForm";

export default function Form() {
  const { onMail, data, handleChange, statusForm, error, handleFocus } =
    useForm();

  return (
    <form
      onSubmit={onMail}
      className="relative flex w-full flex-col items-start gap-y-4 rounded-lg bg-secondary/80 p-4 shadow-xl"
    >
      <label className="relative flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">
          Nombre y Apellido
        </span>
        <input
          value={data.name}
          onChange={handleChange}
          onFocus={handleFocus}
          required
          name="name"
          type="text"
          className={cn(
            "rounded-full border-b-4 border-r-2 border-transparent  px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary",
            error.name && "border-2 border-red-500",
          )}
        />
        {error.name && (
          <span className="absolute -bottom-5 right-4 text-sm font-bold text-red-500">
            {error.name}
          </span>
        )}
      </label>

      <label className="relative flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">Email</span>
        <input
          value={data.mail}
          required
          onChange={handleChange}
          name="mail"
          type="text"
          className="rounded-full border-b-4 border-r-2 border-transparent  px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary"
        />
      </label>

      <label className="relative flex w-full flex-col gap-y-1.5">
        <span className="font-helvetica-bold text-white">
          Envianos tu mensaje:
        </span>
        <textarea
          onChange={handleChange}
          onFocus={handleFocus}
          value={data.message}
          required
          name="message"
          className={cn(
            "h-24 resize-none rounded-3xl  border-b-4 border-r-2 border-transparent px-4 py-2 text-gray-700 shadow-xl outline-none transition-all focus:border-secondary",
            error.message && "border-2 border-red-500",
          )}
        ></textarea>
        {error.message && (
          <span className="absolute -bottom-5 right-4 text-sm font-bold text-red-500">
            {error.message}
          </span>
        )}
      </label>

      <span
        className={cn(
          " pointer-events-none absolute bottom-6 left-6 w-72 rounded-lg border-2  px-2 py-1 text-sm text-white  opacity-0 transition-opacity duration-200 ease-in-out",
          statusForm.status === "success" &&
            "border-green-500 bg-green-300/50 opacity-100",
          statusForm.status === "error" &&
            "border-red-500 bg-red-300/50 opacity-100",
        )}
      >
        {statusForm.status === "success"
          ? "El correo fue enviado correctamente, en estos dias te contactaremos."
          : "Algo ocurrio en el servidor, intentalo mas tarde"}
      </span>

      <button
        disabled={statusForm.isLoading}
        type="submit"
        className="mt-2 flex h-12 w-24 items-center justify-center self-end rounded-xl border  border-b-4  border-r-2 border-secondary bg-white text-center font-bold text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary/60 hover:text-white"
      >
        {statusForm.isLoading ? <IconLoader /> : "Enviar"}
      </button>
    </form>
  );
}
