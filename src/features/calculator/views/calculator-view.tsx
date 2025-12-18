"use client";

import { CalculatorForm } from "../components/calculator-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, DollarSign, TrendingUp } from "lucide-react";

export const CalculatorView = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Pricing Calculator
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get an instant estimate for your project. Adjust parameters to
              match your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <CalculatorForm />

      {/* ROI Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Understanding Your Investment
              </h2>
              <p className="text-muted-foreground">
                How our projects deliver value
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <TrendingUp className="size-8 text-primary mb-2" />
                  <CardTitle className="text-lg">High ROI</CardTitle>
                  <CardDescription>
                    Average 250% return on investment within the first year
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="size-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Fast Delivery</CardTitle>
                  <CardDescription>
                    Efficient project execution with on-time completion
                    guarantee
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="size-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Transparent Pricing</CardTitle>
                  <CardDescription>
                    No hidden fees, clear milestones, and flexible payment plans
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
