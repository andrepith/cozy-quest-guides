import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Heart, Gift } from "lucide-react";
import { CharacterData } from "@/types/guide";

interface CharacterCardsProps {
  title?: string;
  description?: string;
  characters: CharacterData[];
}

export const CharacterCards = ({ title = "Romance Guide", description = "Learn about marriage candidates and their preferences", characters }: CharacterCardsProps) => {
  return (
    <Card className="shadow-soft border-2 mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="text-destructive" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((character) => (
            <HoverCard key={character.name}>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                  <div className="text-2xl">{character.emoji}</div>
                  <span>{character.name}</span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">{character.name}</h4>
                  <p className="text-sm text-muted-foreground">{character.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Gift className="text-primary" size={16} />
                    <span className="font-semibold">Loved Gifts:</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    {character.lovedGifts.map((gift, index) => (
                      <li key={index}>• {gift}</li>
                    ))}
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
