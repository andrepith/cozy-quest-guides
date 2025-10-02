import { Navigation } from "@/components/Navigation";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, BookMarked } from "lucide-react";
import heroImage from "@/assets/hero-cozy-games.jpg";
import stardewIcon from "@/assets/stardew-icon.png";
import storyOfSeasonsIcon from "@/assets/story-of-seasons-icon.png";
import runeFactoryIcon from "@/assets/rune-factory-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cozy gaming landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Your Guide to
              <span className="block bg-gradient-meadow bg-clip-text text-transparent">
                Cozy Gaming
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Interactive walkthroughs, tips, and guides for Stardew Valley, Story of Seasons, Rune Factory, and more!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" variant="cozy" className="text-base md:text-lg w-full sm:w-auto">
                <Sparkles className="mr-2" size={20} />
                Explore Guides
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg w-full sm:w-auto">
                <Heart className="mr-2" size={20} />
                Favorites
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="text-center p-6 md:p-8 rounded-2xl bg-card shadow-soft animate-fade-in hover:shadow-glow transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-meadow rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <BookMarked className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-display">Interactive Guides</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Expandable sections, checklists, and tabs make finding information a breeze
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-card shadow-soft animate-fade-in hover:shadow-glow transition-all duration-300" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "0.5s" }}>
              <Sparkles className="text-secondary-foreground" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-display">Rich Content</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Detailed crop data, character info, and seasonal strategies at your fingertips
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-card shadow-soft animate-fade-in hover:shadow-glow transition-all duration-300 sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-sky rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "1s" }}>
              <Heart className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-display">Made with Love</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Crafted by cozy game enthusiasts for cozy game enthusiasts
            </p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-display">Choose Your Game</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Select a game to view comprehensive guides and walkthroughs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <GameCard
            title="Stardew Valley"
            description="Complete farming guides, romance options, and seasonal strategies"
            image={stardewIcon}
            link="/stardew-valley"
          />
          <GameCard
            title="Story of Seasons"
            description="Master the art of ranch management and village life"
            image={storyOfSeasonsIcon}
            link="/story-of-seasons"
          />
          <GameCard
            title="Rune Factory"
            description="Balance farming, combat, and relationships in this fantasy world"
            image={runeFactoryIcon}
            link="/rune-factory"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
