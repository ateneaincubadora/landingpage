import React, { useState } from "react";
import { formValidate, sendMail } from "./form-action";

interface StatusForm {
  status: "initial" | "error" | "success";
  isLoading: boolean;
}

export default function useForm() {
  const [data, setData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    message: "",
  });

  const [statusForm, setStatusForm] = useState<StatusForm>({
    status: "initial",
    isLoading: false,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFocus = () => setError({ name: "", message: "" });

  const onReset = () => setData({ name: "", mail: "", message: "" });

  const onMail = async (e: React.FormEvent) => {
    setStatusForm((prevValues) => ({ ...prevValues, isLoading: true }));
    e.preventDefault();

    const { fields, isError } = formValidate({ data });

    if (isError) {
      setError((prevValues) => ({ ...prevValues, ...fields }));
      setStatusForm((prevValues) => ({ ...prevValues, isLoading: false }));
      return;
    }

    try {
      await sendMail({ data });
      setStatusForm((prevValues) => ({ ...prevValues, status: "success" }));
    } catch (error) {
      console.log(error);
      setStatusForm((prevValues) => ({ ...prevValues, status: "error" }));
    } finally {
      onReset();
      setStatusForm((prevValues) => ({ ...prevValues, isLoading: false }));
      setTimeout(() => {
        setStatusForm((prevValues) => ({ ...prevValues, status: "initial" }));
      }, 3200);
    }
  };

  return { onMail, handleChange, handleFocus, data, statusForm, error };
}
