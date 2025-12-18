import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Transform your ideas into feasible, profitable projects with our
              expert engineering teams.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <FaFacebookF className="size-4" />
              </Link>
              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <FaLinkedin className="size-4" />
              </Link>
              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <FaTwitter className="size-4" />
              </Link>
              <Link
                href="#"
                className="flex size-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <FaInstagram className="size-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Architectural Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Engineering Consultations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 mt-0.5 shrink-0" />
                <span>info@engineeringcenter.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>123 Engineering Boulevard, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Engineering Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
