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
  BugOffIcon,
  Code,
  CodeXmlIcon,
  Palette,
  RocketIcon,
  SearchCode,
  Shield,
  ShoppingCart,
  Smartphone,
  ViewIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";

const process = [
  {
    step: "1",
    title: "Discovery",
    desc: "Understand requirements and goals",
    icon: SearchCode,
  },
  {
    step: "2",
    title: "Design",
    desc: "Create wireframes and prototypes",
    icon: ViewIcon,
  },
  {
    step: "3",
    title: "Development",
    desc: "Build and test the application",
    icon: CodeXmlIcon,
  },
  {
    step: "4",
    title: "Testing",
    desc: "Quality assurance and bug fixes",
    icon: BugOffIcon,
  },
  {
    step: "5",
    title: "Launch",
    desc: "Deploy and provide support",
    icon: RocketIcon,
  },
];

export const WebTab = () => {
  return (
    <TabsContent value="web" className="mt-8">
      <div className="grid gap-8 lg:grid-cols-2 mb-12 items-center justify-center">
        <div className="lg:row-span-2 flex items-center justify-center gap-6 flex-col text-center">
          <div className="flex size-16 items-center justify-center rounded-lg bg-primary/10">
            <Code className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Web Development & Digital Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed text-balance">
            Transform your business with cutting-edge web applications and
            digital platforms. Our expert developers create scalable, secure,
            and user-friendly solutions tailored to your specific needs.
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
              Comprehensive web development services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Custom Web Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Bespoke web applications built with modern frameworks like
                  React, Next.js, and Vue.js
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingCart className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-commerce Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Full-featured online stores with payment integration,
                  inventory management, and analytics
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mobile App Development</h3>
                <p className="text-sm text-muted-foreground">
                  Native and cross-platform mobile applications for iOS and
                  Android
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful, intuitive interfaces designed with user experience
                  in mind
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Security & Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing support, security updates, and performance
                  optimization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">API Development</h3>
                <p className="text-sm text-muted-foreground">
                  RESTful and GraphQL APIs for seamless integrations and data
                  management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Our Web Development Process</CardTitle>
          <CardDescription>
            From concept to deployment in 5 structured phases
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
