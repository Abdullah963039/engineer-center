import { ArrowRight, BarChart3, MessageSquare, Shield } from "lucide-react";
import { ServiceCard } from "../components/service-card";
import { ServicesTabs } from "../components/services-tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ServicesView = () => {
  return (
    <div>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Our Engineering Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive engineering solutions across web development,
              architectural design, and civil engineering disciplines
            </p>
          </div>
        </div>
      </section>

      <ServicesTabs />

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized consulting and support services to complement your
              project
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Engineering Consultations"
              description="Expert advice and technical guidance for your specific engineering challenges"
              icon={MessageSquare}
              services={[
                "Technical Feasibility Studies",
                "Code Compliance Review",
                "Risk Assessment",
              ]}
            />
            <ServiceCard
              title="Project Management"
              description="Comprehensive oversight to ensure your project stays on track and within budget"
              icon={BarChart3}
              services={[
                "Timeline Planning",
                "Resource Allocation",
                "Quality Assurance",
              ]}
            />
            <ServiceCard
              title="Maintenance & Support"
              description="Ongoing support and maintenance to keep your project running smoothly"
              icon={Shield}
              services={[
                "Regular Inspections",
                "Performance Monitoring",
                "Emergency Support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation and let&apos;s discuss
              how we can bring your project to life
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline">
                  Calculate Project Cost
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
