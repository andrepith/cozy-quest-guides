import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const GameCard = ({ title, description, image, link }: GameCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-glow animate-fade-in border border-border/50 hover:border-primary/30 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-44 sm:h-52 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-5 sm:p-6">
        <CardTitle className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-display">{title}</CardTitle>
        <CardDescription className="mb-4 sm:mb-5 text-xs sm:text-sm md:text-base leading-relaxed">{description}</CardDescription>
        <Link to={link}>
          <Button className="w-full group/btn text-xs sm:text-sm shadow-medium">
            View Guides
            <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
