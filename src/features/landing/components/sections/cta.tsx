import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
          <CardContent className="p-12 text-center">
            <Award className="size-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Submit your project idea today and receive a free consultation and
              cost estimate. Our team will analyze your requirements and provide
              a detailed proposal.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">
                Submit Your Idea
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
