"use client";

import { TbBrightness } from "react-icons/tb";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Hint } from "./hint";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function onClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Hint content={<p className="text-xs font-medium">Toggle Theme</p>}>
      <Button variant="transparent" size="icon" onClick={onClick}>
        <TbBrightness className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Hint>
  );
}
