import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Qubio — Messaging that moves your business", template: "%s | Qubio" },
  description: "Explore the Qubio SMS marketplace. A demo preview with sample services and prices.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="demo-banner">YOU’RE EXPLORING A DEMO <span>Sample data only. No payments or messages are processed.</span></div>
    <header className="site-header shell">
      <Link href="/" className="brand" aria-label="Qubio home"><span className="brand-mark">q</span>qubio<span className="brand-dot">.</span></Link>
      <nav aria-label="Main navigation"><Link href="/#services">Explore services</Link><Link href="/#how-it-works">How it works</Link><Link href="/developers">For developers</Link></nav>
      <Link className="button button-small" href="/dashboard">Explore dashboard <span aria-hidden="true">↗</span></Link>
    </header>
    <main id="main">{children}</main>
    <footer className="footer shell"><div><Link href="/" className="brand">qubio.</Link><p>Better connections. Thoughtfully built.</p></div><div className="footer-links"><Link href="/refund-policy">Draft refund rules</Link><Link href="/developers">Developer preview</Link><Link href="/admin">Admin preview</Link></div><p className="footer-note">© {new Date().getFullYear()} Qubio · Foundation preview</p></footer>
  </body></html>;
}
