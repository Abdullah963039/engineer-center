"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Language } from "../lib";
import { Button } from "@/components/ui/button";
import { Globe2Icon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/hooks/use-language";

export const LanguageMenu = () => {
  const [lang, setLang] = useLanguage();

  const isActive = (lan: Language) => lan === lang;

  return (
    <DropdownMenu dir={lang == "en" ? "ltr" : "rtl"} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"}>
          <Globe2Icon className="size-4" />
          <span className="font-bold">
            {lang === "en" ? "English" : "العربية"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setLang("en")}
          className={cn(isActive("en") ? "font-bold" : null)}
        >
          <Image src={"/en.png"} alt="USA flag" width={20} height={20} />
          <span>{lang === "en" ? "English" : "الانكليزية"}</span>
        </DropdownMenuItem>
        <Separator orientation="horizontal" />
        <DropdownMenuItem
          onClick={() => setLang("ar")}
          className={cn(isActive("ar") ? "font-bold" : null)}
        >
          <Image src={"/ar.png"} alt="UAE flag" width={20} height={20} />
          <span>{lang === "en" ? "Arabic" : "العربية"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
