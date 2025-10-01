import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { CropData } from "@/types/guide";

interface CropsAccordionProps {
  crops: CropData[];
}

export const CropsAccordion = ({ crops }: CropsAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {crops.map((crop) => (
        <AccordionItem key={crop.id} value={crop.id}>
          <AccordionTrigger className="text-lg">
            <div className="flex items-center gap-2">
              {crop.emoji} {crop.name}
              <Badge variant="secondary">{crop.badge}</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-semibold">Seed Price:</p>
                <p className="text-muted-foreground">{crop.seedPrice}</p>
              </div>
              <div>
                <p className="font-semibold">Sell Price:</p>
                <p className="text-muted-foreground">{crop.sellPrice}</p>
              </div>
              <div>
                <p className="font-semibold">Growth Time:</p>
                <p className="text-muted-foreground">{crop.growthTime}</p>
              </div>
              <div>
                <p className="font-semibold">Regrows:</p>
                <p className="text-muted-foreground">{crop.regrows}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Pro Tips:</p>
              <ul className="space-y-1 pl-4">
                {crop.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="text-accent mt-1 flex-shrink-0" size={16} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
