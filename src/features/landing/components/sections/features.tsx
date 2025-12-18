import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, MessageSquare, TrendingUp, Users } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Tools & Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to bring your project from idea to reality
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Calculator className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Pricing Calculator</CardTitle>
              <CardDescription className="text-sm">
                Get instant cost estimates for your project
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Live Consultation</CardTitle>
              <CardDescription className="text-sm">
                Connect with our experts in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">ROI Analysis</CardTitle>
              <CardDescription className="text-sm">
                Understand your project&apos;s return on investment
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Project Tracking</CardTitle>
              <CardDescription className="text-sm">
                Monitor your project progress every step of the way
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
