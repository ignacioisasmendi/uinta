import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

type sendEmailProps = {
  toProp: string;
  subjectProp: string;
  emailProp: React.ReactElement;
}

export async function sendEmail({ toProp, subjectProp, emailProp }: sendEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: toProp,
      subject: subjectProp,
      react: emailProp,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


