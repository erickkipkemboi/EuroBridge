import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EuroBridge",
  icons: {
    icon: '/icons/logo.png',
 
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`} suppressHydrationWarning>
      
                 <div className="flex flex-col min-h-screen">
                    <main className="flex-grow">{children}</main>
            
               
          </div>
        
      </body>
    </html>
  );
}
