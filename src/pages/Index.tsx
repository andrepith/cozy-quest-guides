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
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
              <Sparkles className="text-primary" size={16} />
              <span className="text-xs sm:text-sm font-semibold text-primary">Your Ultimate Gaming Companion</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-display">
              Master Your Favorite
              <span className="block mt-2 bg-gradient-hero bg-clip-text text-transparent">
                Cozy Games
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Interactive guides, detailed walkthroughs, and expert tips for Stardew Valley, Story of Seasons, and more
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button size="lg" className="text-sm sm:text-base w-full sm:w-auto shadow-glow">
                <Sparkles className="mr-2" size={18} />
                Explore Guides
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base w-full sm:w-auto">
                <Heart className="mr-2" size={18} />
                Favorites
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="group p-6 sm:p-8 rounded-3xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in border border-border/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
              <BookMarked className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-display">Interactive Guides</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Smart accordions, searchable lists, and dynamic tabs for easy navigation
            </p>
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in border border-border/50" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-secondary-foreground" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-display">Rich Content</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Comprehensive data, character details, and pro strategies all in one place
            </p>
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in border border-border/50 sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
              <Heart className="text-accent-foreground" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-display">Made with Love</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Built by passionate gamers who love cozy gaming experiences
            </p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display">Choose Your Adventure</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Dive into comprehensive guides crafted for your favorite cozy games
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
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
