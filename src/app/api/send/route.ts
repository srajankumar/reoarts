import { EmailTemplate } from "@/lib/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${name} - ${email} <onboarding@resend.dev>`,
      to: ["kumarsrajan02@gmail.com"],
      subject: "Reo Arts Message",
      react: EmailTemplate({
        Name: name,
        Email: email,
        Message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
