"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon, UploadIcon } from "lucide-react";
import { FormEvent } from "react";

export const ProjectForm = ({
  onSubmit,
}: {
  onSubmit: (event: FormEvent) => void;
}) => {
  function handleSubmit(e: FormEvent) {
    onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-semibold">Contact Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name *</Label>
            <Input id="first-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name *</Label>
            <Input id="last-name" required />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company / Organization</Label>
          <Input id="company" />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-4">
        <h3 className="font-semibold">Project Details</h3>
        <div className="space-y-2">
          <Label htmlFor="project-type">Project Type *</Label>
          <Select required>
            <SelectTrigger id="project-type">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="architectural">
                Architectural Engineering
              </SelectItem>
              <SelectItem value="civil">Civil Engineering</SelectItem>
              <SelectItem value="consultation">
                Engineering Consultation
              </SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-title">Project Title *</Label>
          <Input
            id="project-title"
            placeholder="Give your project a name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Project Description *</Label>
          <Textarea
            id="description"
            placeholder="Describe your project idea, goals, and requirements..."
            rows={6}
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <Select>
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k">$100,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Desired Timeline</Label>
            <Select>
              <SelectTrigger id="timeline">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">ASAP (1-2 months)</SelectItem>
                <SelectItem value="normal">Normal (3-6 months)</SelectItem>
                <SelectItem value="flexible">Flexible (6+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="spacTextareae-y-2">
          <Label htmlFor="attachments">Attachments (Optional)</Label>
          <div className="flex items-center gap-2">
            <Input id="attachments" type="file" multiple className="flex-1" />
            <Button type="button" variant="outline" size="icon">
              <UploadIcon className="size-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Upload any relevant documents, blueprints, or reference materials
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="font-semibold">Additional Information</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Checkbox id="consultation" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="consultation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I would like to schedule a consultation call
              </label>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="newsletter" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="newsletter"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to our newsletter for engineering insights
              </label>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="terms" required />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions *
              </label>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Project
        <ArrowRightIcon className="ml-2 size-4" />
      </Button>
    </form>
  );
};
