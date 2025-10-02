import { Navigation } from "@/components/Navigation";
import { GuideData } from "@/types/guide";
import { SeasonalTabs } from "./SeasonalTabs";
import { CharacterCards } from "./CharacterCards";
import { GuideChecklist } from "./GuideChecklist";

interface GuideLayoutProps {
  data: GuideData;
}

export const GuideLayout = ({ data }: GuideLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 ${data.gradient} bg-clip-text text-transparent font-display`}>
            {data.title}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground">
            {data.subtitle}
          </p>
        </div>

        {/* Seasonal Content */}
        <SeasonalTabs seasons={data.seasons} />

        {/* Characters Section */}
        {data.characters && data.characters.length > 0 && (
          <CharacterCards characters={data.characters} />
        )}

        {/* Checklist Section */}
        {data.checklist && data.checklist.length > 0 && (
          <GuideChecklist items={data.checklist} />
        )}
      </main>
    </div>
  );
};
