import "./globals.css";
import { Inter } from "next/font/google";
import { AppShell } from "../components/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkillBridge",
  description: "A job marketplace for skilled workers and contractors."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
