import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail = ({
  userFirstname,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Bienvenido a Uinta
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://uinta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo%20cd.2.5690f8ef.png&w=3840&q=75"
          width="150"
          height="150"
          alt="Uinta"
          style={logo}
        />
        <Text style={paragraph}>Hola {userFirstname},</Text>
        <Text style={paragraph}>
          Bienvenido a Uinta, lo invitamos a explorar nuestra página web www.uintaconstrucciones.com 
          para conocer más sobre nuestros obras y los servicios que ofrecemos. 
          Si tiene alguna pregunta o desea programar una consulta, no dude en contactarnos.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://uinta.vercel.app/login">
            Empecemos
          </Button>
        </Section>
        <Text style={paragraph}>
          Saludos
          <br />
          Equipo de Uinta Construcciones
        </Text>
      </Container>
    </Body>
  </Html>
);

WelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#FDC107",
  borderRadius: "3px",
  color: "#000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
