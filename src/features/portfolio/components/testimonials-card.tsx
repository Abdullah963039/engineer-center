import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialsCardProps {
  comment: string;
  rating: number;
  user: {
    name: string;
    position: string;
  };
}

export const TestimonialsCard = ({
  comment,
  rating,
  user,
}: TestimonialsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-y-1 items-start justify-start">
          <h3 className="font-semibold text-lg text-primary">{user.name}</h3>
          <p className="text-xs">{user.position}</p>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-full px-2 py-0.5 ring-1 ring-primary/30">
          <span className="font-semibold text-sm text-primary">{rating}</span>
          <Star className="size-4 fill-primary text-primary" />
        </div>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <q>{comment}</q>
      </CardContent>
    </Card>
  );
};
