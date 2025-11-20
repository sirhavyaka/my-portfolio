import { Geist} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import LocalFont from 'next/font/local';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const delius = LocalFont({
  src: './fonts/DeliusUnicase-Bold.ttf',
  variable: '--font-delius', 
});

const merry = LocalFont({
  src: './fonts/Merriweather_48pt-Medium.ttf',
  variable: '--font-merry', 
});
export const metadata = {
  title: "Chyavan's Portfolio",
  description: "This is a portfolio of Chyavan Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${merry.variable} ${delius.variable}`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
