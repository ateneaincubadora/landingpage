const messagesErrors = {
  minMessage: "El mensaje debe tener almenos 6 caracteres.",
  notSpecialCharacters: "El campo no permite de caracteres especiales.",
};

interface DataProps {
  data: {
    name: string;
    mail: string;
    message: string;
  };
}

export async function sendMail({ data }: DataProps) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/mail", config);
  const result = await response.json();
  return result;
}

export function formValidate({ data }: DataProps) {
  const { message, name } = data;

  const regexAlphabet = /^[a-zA-Z0-9\s]+$/;
  const errors = {
    isError: false,
    fields: {
      name: "",
      message: "",
    },
  };

  if (message.length < 6) {
    errors.isError = true;
    errors.fields = {
      ...errors.fields,
      message: messagesErrors.minMessage,
    };
  }

  if (!regexAlphabet.test(name)) {
    errors.isError = true;
    errors.fields = {
      ...errors.fields,
      name: messagesErrors.notSpecialCharacters,
    };
  }

  return errors;
}
