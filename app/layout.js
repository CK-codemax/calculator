import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./themes/ThemeProvider";
import { CalculatorProvider } from "./contexts/CalculatorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CalculatorProvider>
            {children}
          </CalculatorProvider>
        </Providers>
      </body>
    </html>
  );
}
