import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm mb-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">
              Professional Engineering Services
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
            Transform Your Ideas Into{" "}
            <span className="text-primary">Reality</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            Expert teams specialized in web development, architectural
            engineering, and civil engineering. We turn your project ideas into
            feasible, profitable ventures at competitive prices.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
              <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Expert Teams</div>
                <div className="text-xs text-muted-foreground">
                  Specialized in multiple engineering disciplines
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
              <Clock className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Fast Delivery</div>
                <div className="text-xs text-muted-foreground">
                  Efficient project management and execution
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
              <Target className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">
                  Competitive Pricing
                </div>
                <div className="text-xs text-muted-foreground">
                  Quality service at affordable rates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
