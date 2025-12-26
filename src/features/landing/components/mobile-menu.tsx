import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link2, MenuIcon } from "lucide-react";
import Link from "next/link";

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

export const MobileMenu = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={20}
        className="w-[calc(100dvw-20px)] bg-background md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <DropdownMenuItem key={link.href} className="w-full" asChild>
            <Link href={link.href}>
              <Link2 className="mr-2 size-4" />
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
