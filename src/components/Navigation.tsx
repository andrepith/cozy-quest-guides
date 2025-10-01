import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Search } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-meadow rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all">
            <BookOpen className="text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Cozy Guides</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2" />
              Home
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            <Search className="mr-2" />
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
};
