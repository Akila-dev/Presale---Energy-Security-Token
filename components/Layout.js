// components/Layout.js
import { Footer, Navbar } from "../components";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-fg">
      {/* Content */}
      <main className="flex-grow">{children}</main>

      {/* Navbar + Navigation */}
      <Navbar />
      {/* Footer */}
      <Footer />
    </div>
  );
}
