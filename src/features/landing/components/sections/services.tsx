import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code,
  HardHat,
} from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering solutions across multiple disciplines
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="size-6 text-primary" />
              </div>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>
                Modern web applications and digital solutions tailored to your
                business needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Custom Web Applications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Mobile App Development
                </li>
              </ul>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="mt-4 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 className="size-6 text-primary" />
              </div>
              <CardTitle>Architectural Engineering</CardTitle>
              <CardDescription>
                Innovative architectural designs and interior solutions for any
                space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Building Design & Planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Interior Design Solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  3D Visualization & Modeling
                </li>
              </ul>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="mt-4 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <HardHat className="size-6 text-primary" />
              </div>
              <CardTitle>Civil Engineering</CardTitle>
              <CardDescription>
                Comprehensive construction and infrastructure engineering
                services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Structural Engineering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Project Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  Quality Control & Testing
                </li>
              </ul>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="mt-4 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
