import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import ProgressBadge from "./ProgressBadge";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { label: "Explore", href: "/", icon: "🗺️" },
  { label: "Careers", href: "/career", icon: "⚓" },
  { label: "Government", href: "/government", icon: "🏛️" },
  { label: "Global", href: "/global", icon: "🌍" },
  { label: "Business", href: "/business", icon: "⛵" },
  { label: "Archives", href: "/archives", icon: "📖" },
  { label: "Inspiration", href: "/inspiration", icon: "🎬" },
  { label: "Enterprise", href: "/enterprise", icon: "💼" },
];

export default function Layout({ children }: LayoutProps) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ── Header ── */}
      <header className="bg-card border-b-2 border-border shadow-maritime sticky top-0 z-50 parchment-texture">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0 group"
              data-ocid="header.home_link"
            >
              <span
                className="text-3xl transition-smooth group-hover:rotate-12 inline-block select-none"
                aria-hidden="true"
              >
                🧭
              </span>
              <div>
                <h1 className="font-display text-2xl text-foreground leading-none">
                  PathFinder
                </h1>
                <p className="text-xs text-muted-foreground font-body tracking-[0.18em] uppercase mt-0.5">
                  Your Career &amp; Life Compass
                </p>
              </div>
            </Link>

            {/* Progress Badge + Desktop Nav */}
            <div className="hidden md:flex items-center gap-3">
              <ProgressBadge />
              <div
                className="w-px h-5 bg-border opacity-50"
                aria-hidden="true"
              />
            </div>
            <nav
              className="hidden md:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-body transition-smooth flex items-center gap-1.5 ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold shadow-maritime"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                    data-ocid={`header.nav.${link.label.toLowerCase()}`}
                  >
                    <span className="text-xs" aria-hidden="true">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Nav — scrollable row */}
          <div className="flex md:hidden items-center gap-2 mt-2.5">
            <ProgressBadge className="flex-shrink-0 text-xs" />
            <nav
              className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none flex-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded text-xs font-body transition-smooth ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                    data-ocid={`header.mobile_nav.${link.label.toLowerCase()}`}
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 bg-background">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-card border-t-2 border-border parchment-texture mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="text-2xl select-none" aria-hidden="true">
                🧭
              </span>
              <div>
                <p className="font-display text-lg text-foreground">
                  PathFinder
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">
                  Chart your course to a fulfilling life
                </p>
              </div>
            </div>

            {/* Footer Nav */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-body"
                  data-ocid={`footer.nav.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-border mt-6 pt-6 text-center">
            <p className="text-sm text-muted-foreground font-body">
              © {year}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-smooth underline-offset-2 hover:underline"
              >
                Built with love using caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
