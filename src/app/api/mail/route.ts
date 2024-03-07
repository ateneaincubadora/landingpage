import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_cHexq78m_5ioiAHx6F3s7qZreZncvDvpV");

interface BodyProps {
  name: string;
  mail: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const body: BodyProps = await request.json();

  const { mail, message, name } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "atenea.incubadora@gmail.com",
      subject: `Mensaje desde web - ${name} - ${mail}`,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json(
      {
        message: "El correo fue enviado correctamente",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Ocurrio un error en el servidor.",
      },
      { status: 500 },
    );
  }
}
