import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { AlignCenter } from "lucide-react";
import * as React from "react";

interface WelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = `https://uinta.vercel.app`

  export const WelcomeEmail = ({
    userFirstname
  }: WelcomeEmailProps) => (
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
              ¡Nos alegra que te hayas unido a Uinta Construcciones! Estamos encantados de tenerte con nosotros y esperamos que disfrutes de todos los beneficios y servicios que ofrecemos.
            </Text>
            <Button style={button} href={`${baseUrl}/login`}>
              Iniciar sesión en tu cuenta
            </Button>
            <Hr style={hr} />
            <Text style={footer}>Uinta Construcciones</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  

  WelcomeEmail.PreviewProps = {
    userFirstname: "Nacho",
  } as WelcomeEmailProps;

  export default WelcomeEmail;
  
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