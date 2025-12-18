import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "../components/form";
import { Informations } from "../components/informations";
import { MapPin } from "lucide-react";

export const ContactView = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <Informations />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>
                  Visit our office or schedule a site visit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <MapPin className="size-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      123 Engineering Boulevard, Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
