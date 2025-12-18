"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Clock, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";

export const CalculatorForm = () => {
  const [projectType, setProjectType] = useState<string>("");
  const [complexity, setComplexity] = useState<number>(50);
  const [timeline, setTimeline] = useState<number>(3);
  const [teamSize, setTeamSize] = useState<number>(2);

  const calculateEstimate = () => {
    if (!projectType) return 0;

    let basePrice = 0;
    switch (projectType) {
      case "web-basic":
        basePrice = 5000;
        break;
      case "web-ecommerce":
        basePrice = 15000;
        break;
      case "web-enterprise":
        basePrice = 50000;
        break;
      case "arch-residential":
        basePrice = 10000;
        break;
      case "arch-commercial":
        basePrice = 30000;
        break;
      case "civil-small":
        basePrice = 25000;
        break;
      case "civil-large":
        basePrice = 100000;
        break;
      default:
        basePrice = 0;
    }

    const complexityMultiplier = 1 + (complexity / 100) * 0.8;
    const teamMultiplier = 1 + (teamSize - 1) * 0.3;
    const timelineDiscount = timeline >= 6 ? 0.9 : 1;

    return Math.round(
      basePrice * complexityMultiplier * teamMultiplier * timelineDiscount
    );
  };

  const estimatedCost = calculateEstimate();
  const roi = estimatedCost > 0 ? Math.round(estimatedCost * 2.5) : 0;
  const monthlyBreakdown =
    estimatedCost > 0 ? Math.round(estimatedCost / timeline) : 0;

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Provide information about your project to get an accurate
                estimate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger id="project-type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-basic">
                      Web Development - Basic Website
                    </SelectItem>
                    <SelectItem value="web-ecommerce">
                      Web Development - E-commerce
                    </SelectItem>
                    <SelectItem value="web-enterprise">
                      Web Development - Enterprise App
                    </SelectItem>
                    <SelectItem value="arch-residential">
                      Architectural - Residential
                    </SelectItem>
                    <SelectItem value="arch-commercial">
                      Architectural - Commercial
                    </SelectItem>
                    <SelectItem value="civil-small">
                      Civil Engineering - Small Project
                    </SelectItem>
                    <SelectItem value="civil-large">
                      Civil Engineering - Large Project
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Project Complexity</Label>
                  <span className="text-sm text-muted-foreground">
                    {complexity}%
                  </span>
                </div>
                <Slider
                  value={[complexity]}
                  onValueChange={([value]) => setComplexity(value)}
                  min={0}
                  max={100}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Simple</span>
                  <span>Complex</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline (Months)</Label>
                <Input
                  id="timeline"
                  type="number"
                  min="1"
                  max="24"
                  value={timeline}
                  onChange={(e) =>
                    setTimeline(Number.parseInt(e.target.value) || 1)
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Longer timelines may qualify for discounts
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team-size">Team Size</Label>
                <Select
                  value={teamSize.toString()}
                  onValueChange={(value) => setTeamSize(Number.parseInt(value))}
                >
                  <SelectTrigger id="team-size">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Engineer</SelectItem>
                    <SelectItem value="2">2-3 Engineers</SelectItem>
                    <SelectItem value="3">4-5 Engineers</SelectItem>
                    <SelectItem value="4">6+ Engineers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Estimate Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Estimate</CardTitle>
                <CardDescription>
                  Estimated project costs based on your requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg bg-primary/10 p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Total Estimated Cost
                    </div>
                    <div className="text-4xl font-bold text-primary">
                      $
                      {estimatedCost > 0 ? estimatedCost.toLocaleString() : "0"}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="size-4 text-primary" />
                        <div className="text-sm font-semibold">
                          Monthly Cost
                        </div>
                      </div>
                      <div className="text-2xl font-bold">
                        $
                        {monthlyBreakdown > 0
                          ? monthlyBreakdown.toLocaleString()
                          : "0"}
                      </div>
                    </div>

                    <div className="rounded-lg border border-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="size-4 text-primary" />
                        <div className="text-sm font-semibold">
                          Expected ROI
                        </div>
                      </div>
                      <div className="text-2xl font-bold">
                        ${roi > 0 ? roi.toLocaleString() : "0"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="font-semibold text-sm">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Full project management and coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Expert engineering team assignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Regular progress updates and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Quality assurance and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Post-launch support (3 months)</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    disabled={estimatedCost === 0}
                  >
                    <DollarSign className="mr-2 size-4" />
                    Request Detailed Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardContent className="  ">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> This is an estimated cost based on
                  typical project parameters. Final pricing will be determined
                  after a detailed consultation and project assessment. Contact
                  us for a personalized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
