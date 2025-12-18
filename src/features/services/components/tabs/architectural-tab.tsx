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
  Building2,
  Building2Icon,
  ClipboardList,
  Home,
  LightbulbIcon,
  Palette,
  Ruler,
  Shield,
  UserStarIcon,
} from "lucide-react";
import Link from "next/link";
import { GoCommentDiscussion } from "react-icons/go";
import { GrDocumentConfig } from "react-icons/gr";

const process = [
  {
    step: "1",
    title: "Consultation",
    desc: "Understand your vision and needs",
    icon: GoCommentDiscussion,
  },
  {
    step: "2",
    title: "Concept",
    desc: "Develop initial design concepts",
    icon: LightbulbIcon,
  },
  {
    step: "3",
    title: "Design",
    desc: "Create detailed plans and 3D models",
    icon: Building2Icon,
  },
  {
    step: "4",
    title: "Review",
    desc: "Refine based on your feedback",
    icon: UserStarIcon,
  },
  {
    step: "5",
    title: "Documentation",
    desc: "Final blueprints and permits",
    icon: GrDocumentConfig,
  },
];

export const ArchitecturalTab = () => {
  return (
    <TabsContent value="architectural" className="mt-8">
      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <div className="flex flex-col items-center justify-center gap-6 lg:row-span-2 text-center">
          <div className="flex size-16 items-center justify-center rounded-lg bg-primary/10">
            <Building2 className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Architectural Engineering & Design
          </h2>
          <p className="text-muted-foreground leading-relaxed text-balance">
            Create stunning architectural designs that blend functionality with
            aesthetics. Our architectural team brings your vision to life with
            innovative designs and meticulous planning.
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
            <CardDescription>Complete architectural services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Ruler className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Building Design & Planning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive architectural plans for residential, commercial,
                  and industrial buildings
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Home className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Interior Design</h3>
                <p className="text-sm text-muted-foreground">
                  Functional and aesthetic interior spaces that reflect your
                  style and needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">3D Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Photorealistic 3D renderings and virtual tours of your project
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ClipboardList className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Construction Documentation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Detailed blueprints, specifications, and technical drawings
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Permit & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate building codes, permits, and regulatory requirements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Project Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance on design choices, materials, and cost
                  optimization
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Our Design Process</CardTitle>
          <CardDescription>
            From concept to construction-ready plans
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
