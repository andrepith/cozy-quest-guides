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
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
            <BookOpen className="text-primary-foreground" size={18} />
          </div>
          <span className="text-base sm:text-lg font-bold font-display bg-gradient-primary bg-clip-text text-transparent">Cozy Guides</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Home className="mr-2" size={16} />
              Home
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="rounded-xl">
            <Search className="mr-2" size={16} />
            Search
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-3 mt-8">
              <Link to="/">
                <Button variant="ghost" size="lg" className="w-full justify-start rounded-xl">
                  <Home className="mr-3" size={20} />
                  Home
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="w-full justify-start rounded-xl">
                <Search className="mr-3" size={20} />
                Search
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
