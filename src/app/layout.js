import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalToast } from "./toast/toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalToast />
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
