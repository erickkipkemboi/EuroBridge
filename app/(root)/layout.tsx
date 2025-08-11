import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Non-sticky contact bar */}
      <TopNavbar />

      {/* Sticky main navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
