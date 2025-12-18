import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Code, ExternalLink, HardHat, Star } from "lucide-react";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  rating: number;
};
type Category = "web" | "architectural" | "civil";

interface ProjectCardProps {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const CategoryIcon =
    project.category === "web"
      ? Code
      : project.category === "architectural"
      ? Building2
      : HardHat;
  const categoryLabel =
    project.category === "web"
      ? "Web Development"
      : project.category === "architectural"
      ? "Architectural"
      : "Civil Engineering";

  return (
    <Card
      key={project.id}
      className="group overflow-hidden hover:border-primary/50 transition-colors pt-0"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {project.year}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">
            <CategoryIcon className="size-3 mr-1" />
            {categoryLabel}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-primary rounded-full px-2 py-0.5 ring-1 ring-primary">
            <span className="font-semibold">{project.rating}</span>
            <Star className="size-4 fill-primary " />
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{project.client}</span>
          <Button variant="ghost" size="sm" className="group/btn">
            View Details
            <ExternalLink className="ml-2 size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
