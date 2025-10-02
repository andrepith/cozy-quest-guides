import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b shadow-soft">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-meadow rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all">
            <BookOpen className="text-primary-foreground" size={20} />
          </div>
          <span className="text-lg md:text-xl font-bold font-display">Cozy Guides</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2" size={18} />
              Home
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            <Search className="mr-2" size={18} />
            Search
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/">
                <Button variant="ghost" size="lg" className="w-full justify-start">
                  <Home className="mr-2" size={20} />
                  Home
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="w-full justify-start">
                <Search className="mr-2" size={20} />
                Search
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
