import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";
import { ChecklistItem } from "@/types/guide";

interface GuideChecklistProps {
  title?: string;
  description?: string;
  items: ChecklistItem[];
}

export const GuideChecklist = ({ title = "Year 1 Checklist", description = "Essential tasks for your first year", items }: GuideChecklistProps) => {
  return (
    <Card className="shadow-soft border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="text-accent" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
              <Checkbox id={item.id} className="mt-1" />
              <label
                htmlFor={item.id}
                className="text-sm leading-relaxed cursor-pointer"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
