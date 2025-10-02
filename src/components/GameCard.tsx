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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-glow animate-fade-in border-2 hover:scale-[1.02]">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <CardTitle className="mb-2 text-xl md:text-2xl font-display">{title}</CardTitle>
        <CardDescription className="mb-4 text-sm md:text-base leading-relaxed">{description}</CardDescription>
        <Link to={link}>
          <Button variant="cozy" className="w-full group text-sm md:text-base">
            View Guides
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
