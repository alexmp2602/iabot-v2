import "@/app/globals.css";
import Admin from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Admin />
      </body>
    </html>
  );
}
