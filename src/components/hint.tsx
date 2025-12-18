"use client";

import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface HintProps {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "start" | "end";
}
export const Hint = ({
  children,
  content,
  side = "bottom",
  align = "center",
}: HintProps) => {
  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align} alignOffset={20}>
        {content}
      </TooltipContent>
    </Tooltip>
  );
};
