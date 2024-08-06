import classNames from "classnames";
import "../styles/global.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={classNames(
          poppins.className,
          "bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light"
        )}
      >
        {children}
      </body>
    </html>
  );
}
