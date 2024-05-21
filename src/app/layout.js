import "./globals.css";
import { SalesProvider } from "./context/Context";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SalesProvider>
        <body>{children}</body>
      </SalesProvider>
    </html>
  );
}
