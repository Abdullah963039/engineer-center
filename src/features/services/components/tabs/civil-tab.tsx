import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart3,
  BrainIcon,
  Building2,
  CalendarCheck2Icon,
  ClipboardList,
  Hammer,
  HardHat,
  MessageSquare,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { MdOutlineAssessment, MdEngineering } from "react-icons/md";

const process = [
  {
    step: "1",
    title: "Assessment",
    desc: "Site survey and feasibility study",
    icon: MdOutlineAssessment,
  },
  {
    step: "2",
    title: "Planning",
    desc: "Detailed project plan and budget",
    icon: BrainIcon,
  },
  {
    step: "3",
    title: "Engineering",
    desc: "Structural design and analysis",
    icon: MdEngineering,
  },
  {
    step: "4",
    title: "Construction",
    desc: "Build with quality oversight",
    icon: Hammer,
  },
  {
    step: "5",
    title: "Completion",
    desc: "Final inspection and handover",
    icon: CalendarCheck2Icon,
  },
];

export const CivilTab = () => {
  return (
    <TabsContent value="civil" className="mt-8">
      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <div className="flex flex-col items-center justify-center gap-6 lg:row-span-2 text-center">
          <div className="flex size-16 items-center justify-center rounded-lg bg-primary/10">
            <HardHat className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Civil Engineering & Construction
          </h2>
          <p className="text-muted-foreground leading-relaxed text-balance">
            Build with confidence using our comprehensive civil engineering
            services. From structural design to project management, we ensure
            your construction project is safe, efficient, and successful.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>

        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
            <CardDescription>
              Complete civil engineering solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Structural Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Design and analysis of load-bearing structures and foundations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Hammer className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Construction Management</h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end project management from planning to completion
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ClipboardList className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Site Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive site surveys, soil testing, and feasibility
                  studies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Quality Control</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous testing and inspection to ensure safety standards
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Cost Estimation</h3>
                <p className="text-sm text-muted-foreground">
                  Accurate budgeting and resource planning for your project
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Technical Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Expert advice on materials, methods, and best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Our Construction Process</CardTitle>
          <CardDescription>
            From site assessment to project completion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-5">
            {process.map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mx-auto mb-3">
                  <phase.icon className="size-7" />
                </div>
                <h4 className="font-semibold mb-1">{phase.title}</h4>
                <p className="text-xs text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
