import { LucideIcon } from "lucide-react";

export interface CropData {
  id: string;
  name: string;
  emoji: string;
  badge: string;
  seedPrice: string;
  sellPrice: string;
  growthTime: string;
  regrows: string;
  tips: string[];
}

export interface FishData {
  name: string;
  emoji: string;
  location: string;
  price: string;
}

export interface CharacterData {
  name: string;
  emoji: string;
  description: string;
  lovedGifts: string[];
}

export interface SeasonData {
  id: string;
  name: string;
  icon: LucideIcon;
  gradient: string;
  crops?: CropData[];
  fishing?: FishData[];
  description?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface GuideData {
  title: string;
  subtitle: string;
  gradient: string;
  seasons: SeasonData[];
  characters?: CharacterData[];
  checklist?: ChecklistItem[];
}
