"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectForm } from "../components/project-form";
import { useState } from "react";
import {
  ScanEyeIcon,
  HandHelpingIcon,
  PodcastIcon,
  RocketIcon,
  CheckCircle2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const SubmitProjectView = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted)
    return (
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 mb-6 mx-auto">
                <CheckCircle2Icon className="size-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Project Submitted Successfully!
              </h2>
              <p className="text-muted-foreground mb-8">
                Thank you for submitting your project idea. Our team will review
                your submission and contact you within 24-48 hours to schedule a
                consultation.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Check your email for a confirmation and next steps.
                </p>
                <Button size="lg" onClick={() => setSubmitted(false)}>
                  Submit Another Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );

  return (
    <div>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Submit Your Project Idea
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Share your vision with us and let our expert team transform it
              into reality
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        <ScanEyeIcon className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1">Review</div>
                        <div className="text-xs text-muted-foreground">
                          Our team reviews your submission
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        <PodcastIcon className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1">
                          Consultation
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Schedule a free discovery call
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        <HandHelpingIcon className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1">
                          Proposal
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Receive detailed project proposal
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        <RocketIcon className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1">Start</div>
                        <div className="text-xs text-muted-foreground">
                          Begin project development
                        </div>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Free Consultation:</strong> Every project submission
                    includes a complimentary 30-minute consultation with our
                    expert engineers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible about your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectForm onSubmit={handleSubmit} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
