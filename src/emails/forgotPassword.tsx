import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Hr,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ForgotPasswordProps {
  userFirstname: string;
  token: string;
}

const baseUrl = `https://uinta.vercel.app`

export const ForgotPasswordEmail = ({
  userFirstname,
  token
}: ForgotPasswordProps) => (
  <Html>
      <Head />
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/_next/static/media/uinta-logo.fc69a7ed.png`}
              width="180"
              height="80"
              alt="Uinta"
              style={centeredImage}
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Hola {userFirstname},
            </Text>
            <Text style={paragraph}>
              Recibimos una solicitud para restablecer tu contraseña. 
              Si solicitaste este cambio, haz clic en el siguiente enlace para crear una nueva contraseña:
            </Text>
            <Button style={button} href={`${baseUrl}/update-password/${token}`}>
              Restablecer contraseña
            </Button>
            <Text style={paragraphSmaller}>
              Este enlace es válido por las próximas 24 horas. Si no solicitaste este cambio, por favor ignora este mensaje. 
              No se realizarán cambios en tu cuenta.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>Uinta Construcciones</Text>
          </Section>
        </Container>
      </Body>
    </Html>
);

ForgotPasswordEmail.PreviewProps = {
  userFirstname: "Nacho",
  token: "askdhjasdkjhasd567567"
} as ForgotPasswordProps;

export default ForgotPasswordEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};


const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const centeredImage = {
  display: "block",
  margin: "0 auto",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const paragraphSmaller = {
  color: "#525f7f",
  fontSize: "12px",
  lineHeight: "24px",
  textAlign: "center" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#fdc215",
  borderRadius: "5px",
  color: "#000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};