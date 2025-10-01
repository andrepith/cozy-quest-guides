import { Badge } from "@/components/ui/badge";
import { FishData } from "@/types/guide";

interface FishingListProps {
  fish: FishData[];
}

export const FishingList = ({ fish }: FishingListProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        {fish.map((fishItem, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="font-semibold">
              {fishItem.emoji} {fishItem.name} {fishItem.location && `(${fishItem.location})`}
            </span>
            <Badge>{fishItem.price}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
