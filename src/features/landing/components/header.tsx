"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const NAV_LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/calculator",
    label: "Calculator",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-lg font-bold text-primary-foreground">
                EC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-none">
                Engineering Center
              </span>
              <span className="text-xs text-muted-foreground">
                Professional Services
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-primary",
                  pathname === href ? "font-bold" : undefined
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />

            {pathname === "/" && (
              <Link href="/submit-project">
                <Button size="sm">Get Started</Button>
              </Link>
            )}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
