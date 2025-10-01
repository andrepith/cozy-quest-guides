import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SeasonData } from "@/types/guide";
import { CropsAccordion } from "./CropsAccordion";
import { FishingList } from "./FishingList";

interface SeasonalTabsProps {
  seasons: SeasonData[];
}

export const SeasonalTabs = ({ seasons }: SeasonalTabsProps) => {
  return (
    <Tabs defaultValue={seasons[0]?.id} className="mb-12">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-card shadow-soft">
        {seasons.map((season) => {
          const Icon = season.icon;
          return (
            <TabsTrigger
              key={season.id}
              value={season.id}
              className={`data-[state=active]:${season.gradient} data-[state=active]:text-primary-foreground`}
            >
              <Icon className="mr-2" />
              {season.name}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {seasons.map((season) => {
        const Icon = season.icon;
        return (
          <TabsContent key={season.id} value={season.id} className="space-y-6">
            {season.crops && season.crops.length > 0 && (
              <Card className="shadow-soft border-2 animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="text-primary" />
                    {season.name} Crops Guide
                  </CardTitle>
                  <CardDescription>Best crops to maximize your {season.name.toLowerCase()} profits</CardDescription>
                </CardHeader>
                <CardContent>
                  <CropsAccordion crops={season.crops} />
                </CardContent>
              </Card>
            )}

            {season.fishing && season.fishing.length > 0 && (
              <Card className="shadow-soft border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="text-primary" />
                    {season.name} Fishing Guide
                  </CardTitle>
                  <CardDescription>Best fishing spots and catches for {season.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <FishingList fish={season.fishing} />
                </CardContent>
              </Card>
            )}

            {season.description && (
              <Card className="shadow-soft border-2 animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="text-secondary" />
                    {season.name} Guide
                  </CardTitle>
                  <CardDescription>{season.name} strategies and tips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{season.description}</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
