"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Code, HardHat } from "lucide-react";
import { WebTab } from "./tabs/web-tab";
import { ArchitecturalTab } from "./tabs/architectural-tab";
import { CivilTab } from "./tabs/civil-tab";
import { useSearchParams } from "next/navigation";

type TTab = "web" | "civil" | "architectural";

export const ServicesTabs = () => {
  const searchParams = useSearchParams();
  const defaultTab = (searchParams.get("tab") as TTab) || "web";

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="web" className="flex items-center gap-2 py-3">
              <Code className="size-4" />
              Web Development
            </TabsTrigger>
            <TabsTrigger
              value="architectural"
              className="flex items-center gap-2 py-3"
            >
              <Building2 className="size-4" />
              Architectural
            </TabsTrigger>
            <TabsTrigger value="civil" className="flex items-center gap-2 py-3">
              <HardHat className="size-4" />
              Civil Engineering
            </TabsTrigger>
          </TabsList>

          {/* Web Development Tab */}
          <WebTab />

          {/* Architectural Engineering Tab */}
          <ArchitecturalTab />

          {/* Civil Engineering Tab */}
          <CivilTab />
        </Tabs>
      </div>
    </section>
  );
};
