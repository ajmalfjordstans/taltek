import { Montserrat, Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: '--font-cabin'
})
export const metadata = {
  title: "Taltek",
  description: "IT consulting and training.",
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${montserrat.className} ${montserrat.variable} ${cabin.variable}`}>
          <Layout>
            <Navbar />
            {children}
            <Footer />
          </Layout>
        </body>
      </html>
    </>
  );
}
