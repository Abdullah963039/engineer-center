import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
}
export const ServiceCard = ({
  description,
  icon: Icon,
  services,
  title,
}: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4 items-start">
          <Icon className="size-8 text-primary mb-2" />
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {services.map((serv, idx) => (
            <li
              className="flex items-center gap-2"
              key={`${title}-service-${idx}`}
            >
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              {serv}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
