import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

const RuneFactory = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-sky bg-clip-text text-transparent">
            Rune Factory Guides
          </h1>
          <p className="text-xl text-muted-foreground">
            Coming soon! Fantasy farming guides are in development.
          </p>
        </div>

        <Card className="shadow-soft border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Construction className="text-accent" />
              Under Construction
            </CardTitle>
            <CardDescription>We're working hard to bring you comprehensive guides</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Check back soon for combat guides, crafting recipes, and romance options!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RuneFactory;
