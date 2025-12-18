"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Informations = () => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Reach out through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm mb-1">Email</div>
              <a
                href="mailto:info@engineeringcenter.com"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                info@engineeringcenter.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm mb-1">Phone</div>
              <a
                href="tel:+15551234567"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm mb-1">Office</div>
              <p className="text-sm text-muted-foreground">
                123 Engineering Boulevard
                <br />
                Tech City, TC 12345
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm mb-1">Business Hours</div>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            <strong>Emergency Support:</strong> For urgent technical issues or
            project emergencies, call our 24/7 hotline:
          </p>
          <a href="tel:+15559999999" className="text-primary font-semibold">
            +1 (555) 999-9999
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
