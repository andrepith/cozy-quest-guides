import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf, Droplet, Sun, Snowflake, Heart, Gift, Calendar, Star } from "lucide-react";

const StardewValley = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-meadow bg-clip-text text-transparent">
            Stardew Valley Guides
          </h1>
          <p className="text-xl text-muted-foreground">
            Your complete companion for farm life perfection
          </p>
        </div>

        {/* Seasonal Tabs */}
        <Tabs defaultValue="spring" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card shadow-soft">
            <TabsTrigger value="spring" className="data-[state=active]:bg-gradient-meadow data-[state=active]:text-primary-foreground">
              <Leaf className="mr-2" />
              Spring
            </TabsTrigger>
            <TabsTrigger value="summer" className="data-[state=active]:bg-gradient-sunset data-[state=active]:text-secondary-foreground">
              <Sun className="mr-2" />
              Summer
            </TabsTrigger>
            <TabsTrigger value="fall" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Calendar className="mr-2" />
              Fall
            </TabsTrigger>
            <TabsTrigger value="winter" className="data-[state=active]:bg-gradient-sky data-[state=active]:text-primary-foreground">
              <Snowflake className="mr-2" />
              Winter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spring" className="space-y-6">
            <Card className="shadow-soft border-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-primary" />
                  Spring Crops Guide
                </CardTitle>
                <CardDescription>Best crops to maximize your spring profits</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cauliflower">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-2">
                        🥦 Cauliflower
                        <Badge variant="secondary">High Profit</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">Seed Price:</p>
                          <p className="text-muted-foreground">80g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Sell Price:</p>
                          <p className="text-muted-foreground">175g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Growth Time:</p>
                          <p className="text-muted-foreground">12 days</p>
                        </div>
                        <div>
                          <p className="font-semibold">Regrows:</p>
                          <p className="text-muted-foreground">No</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Pro Tips:</p>
                        <ul className="space-y-1 pl-4">
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>Plant in 3x3 grid for chance of Giant Cauliflower</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>Use Speed-Gro for faster harvests</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="strawberry">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-2">
                        🍓 Strawberry
                        <Badge variant="secondary">Multiple Harvest</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">Seed Price:</p>
                          <p className="text-muted-foreground">100g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Sell Price:</p>
                          <p className="text-muted-foreground">120g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Growth Time:</p>
                          <p className="text-muted-foreground">8 days</p>
                        </div>
                        <div>
                          <p className="font-semibold">Regrows:</p>
                          <p className="text-muted-foreground">4 days</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Pro Tips:</p>
                        <ul className="space-y-1 pl-4">
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>Buy from Egg Festival on Spring 13</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>Best profit-per-day crop in Spring</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="potato">
                    <AccordionTrigger className="text-lg">
                      <div className="flex items-center gap-2">
                        🥔 Potato
                        <Badge variant="secondary">Budget-Friendly</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">Seed Price:</p>
                          <p className="text-muted-foreground">50g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Sell Price:</p>
                          <p className="text-muted-foreground">80g</p>
                        </div>
                        <div>
                          <p className="font-semibold">Growth Time:</p>
                          <p className="text-muted-foreground">6 days</p>
                        </div>
                        <div>
                          <p className="font-semibold">Regrows:</p>
                          <p className="text-muted-foreground">No</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold">Pro Tips:</p>
                        <ul className="space-y-1 pl-4">
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>Great for early game cash flow</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span>10% chance to yield extra potato</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplet className="text-primary" />
                  Spring Fishing Guide
                </CardTitle>
                <CardDescription>Best fishing spots and catches for Spring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <span className="font-semibold">🐟 Catfish (Rainy days only)</span>
                    <Badge>200g</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <span className="font-semibold">🐟 Sunfish (River, 6am-7pm)</span>
                    <Badge>30g</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <span className="font-semibold">🐟 Shad (River, 9am-2am)</span>
                    <Badge>60g</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summer" className="space-y-6">
            <Card className="shadow-soft border-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="text-secondary" />
                  Summer Crops Guide
                </CardTitle>
                <CardDescription>Maximize your summer harvest profits</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Focus on Blueberries, Starfruit, and Hot Peppers for maximum profit!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fall" className="space-y-6">
            <Card className="shadow-soft border-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-secondary" />
                  Fall Crops Guide
                </CardTitle>
                <CardDescription>Autumn harvesting strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cranberries and Pumpkins are your best friends this season!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="winter" className="space-y-6">
            <Card className="shadow-soft border-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Snowflake className="text-primary" />
                  Winter Activities Guide
                </CardTitle>
                <CardDescription>Make the most of the snowy season</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Focus on mining, foraging Winter Seeds, and building relationships!</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Villagers Section with Hover Cards */}
        <Card className="shadow-soft border-2 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="text-destructive" />
              Romance Guide
            </CardTitle>
            <CardDescription>Learn about marriage candidates and their preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                    <div className="text-2xl">👩‍🌾</div>
                    <span>Abigail</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Abigail</h4>
                    <p className="text-sm text-muted-foreground">
                      A spirited young woman who loves adventure and the occult.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="text-primary" size={16} />
                      <span className="font-semibold">Loved Gifts:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                      <li>• Amethyst</li>
                      <li>• Pumpkin</li>
                      <li>• Chocolate Cake</li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                    <div className="text-2xl">👨‍🌾</div>
                    <span>Sebastian</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Sebastian</h4>
                    <p className="text-sm text-muted-foreground">
                      A quiet programmer who prefers solitude and rainy days.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="text-primary" size={16} />
                      <span className="font-semibold">Loved Gifts:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                      <li>• Frozen Tear</li>
                      <li>• Sashimi</li>
                      <li>• Obsidian</li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                    <div className="text-2xl">👩‍⚕️</div>
                    <span>Haley</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Haley</h4>
                    <p className="text-sm text-muted-foreground">
                      A fashionable young woman who loves photography and sunshine.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="text-primary" size={16} />
                      <span className="font-semibold">Loved Gifts:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                      <li>• Coconut</li>
                      <li>• Pink Cake</li>
                      <li>• Sunflower</li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                    <div className="text-2xl">👨‍⚕️</div>
                    <span>Alex</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Alex</h4>
                    <p className="text-sm text-muted-foreground">
                      An athletic young man who dreams of becoming a professional gridball player.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="text-primary" size={16} />
                      <span className="font-semibold">Loved Gifts:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                      <li>• Complete Breakfast</li>
                      <li>• Salmon Dinner</li>
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Section */}
        <Card className="shadow-soft border-2">
          <CardHeader>
            <CardTitle>Year 1 Goals Checklist</CardTitle>
            <CardDescription>Track your progress through your first year</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="cc1" />
              <label htmlFor="cc1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Complete Community Center bundles
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cc2" />
              <label htmlFor="cc2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Reach level 5 in all skills
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cc3" />
              <label htmlFor="cc3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Earn 100,000g
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cc4" />
              <label htmlFor="cc4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upgrade house once
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cc5" />
              <label htmlFor="cc5" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Have at least 2 villagers at 8 hearts
              </label>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StardewValley;
