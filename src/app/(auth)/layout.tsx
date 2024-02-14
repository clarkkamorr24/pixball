import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className="flex bg-dark h-screen w-full justify-center">
          {children}
          {/* <div className="flex w-[500px] h-100 bg-dark border mt-20 border-stroke p-8">
            {children}
          </div> */}
        </div>
      </body>
    </html>
  );
}
