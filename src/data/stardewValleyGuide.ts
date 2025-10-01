import { GuideData } from "@/types/guide";
import { Leaf, Sun, Calendar, Snowflake } from "lucide-react";

export const stardewValleyGuide: GuideData = {
  title: "Stardew Valley Guides",
  subtitle: "Your complete companion for farm life perfection",
  gradient: "bg-gradient-meadow",
  seasons: [
    {
      id: "spring",
      name: "Spring",
      icon: Leaf,
      gradient: "bg-gradient-meadow",
      crops: [
        {
          id: "cauliflower",
          name: "Cauliflower",
          emoji: "🥦",
          badge: "High Profit",
          seedPrice: "80g",
          sellPrice: "175g",
          growthTime: "12 days",
          regrows: "No",
          tips: [
            "Plant in 3x3 grid for chance of Giant Cauliflower",
            "Use Speed-Gro for faster harvests"
          ]
        },
        {
          id: "strawberry",
          name: "Strawberry",
          emoji: "🍓",
          badge: "Multiple Harvest",
          seedPrice: "100g",
          sellPrice: "120g",
          growthTime: "8 days",
          regrows: "4 days",
          tips: [
            "Buy from Egg Festival on Spring 13",
            "Best profit-per-day crop in Spring"
          ]
        },
        {
          id: "potato",
          name: "Potato",
          emoji: "🥔",
          badge: "Budget-Friendly",
          seedPrice: "50g",
          sellPrice: "80g",
          growthTime: "6 days",
          regrows: "No",
          tips: [
            "Great for early game cash flow",
            "10% chance to yield extra potato"
          ]
        }
      ],
      fishing: [
        {
          name: "Catfish",
          emoji: "🐟",
          location: "Rainy days only",
          price: "200g"
        },
        {
          name: "Sunfish",
          emoji: "🐟",
          location: "River, 6am-7pm",
          price: "30g"
        },
        {
          name: "Shad",
          emoji: "🐟",
          location: "River, 9am-2am",
          price: "60g"
        }
      ]
    },
    {
      id: "summer",
      name: "Summer",
      icon: Sun,
      gradient: "bg-gradient-sunset",
      description: "Focus on Blueberries, Starfruit, and Hot Peppers for maximum profit!"
    },
    {
      id: "fall",
      name: "Fall",
      icon: Calendar,
      gradient: "bg-secondary",
      description: "Cranberries and Pumpkins are your best friends this season!"
    },
    {
      id: "winter",
      name: "Winter",
      icon: Snowflake,
      gradient: "bg-gradient-sky",
      description: "Focus on mining, foraging Winter Seeds, and building relationships!"
    }
  ],
  characters: [
    {
      name: "Abigail",
      emoji: "👩‍🌾",
      description: "A spirited young woman who loves adventure and the occult.",
      lovedGifts: ["Amethyst", "Pumpkin", "Chocolate Cake"]
    },
    {
      name: "Sebastian",
      emoji: "👨‍🌾",
      description: "A quiet programmer who prefers solitude and rainy days.",
      lovedGifts: ["Frozen Tear", "Sashimi", "Obsidian"]
    },
    {
      name: "Haley",
      emoji: "👩‍⚕️",
      description: "A fashionable young woman who loves photography and sunshine.",
      lovedGifts: ["Coconut", "Pink Cake", "Sunflower"]
    },
    {
      name: "Alex",
      emoji: "👨‍⚕️",
      description: "An athletic young man who dreams of becoming a professional gridball player.",
      lovedGifts: ["Complete Breakfast", "Salmon Dinner"]
    }
  ],
  checklist: [
    {
      id: "community-center",
      label: "Complete Community Center bundles (or buy Joja membership)"
    },
    {
      id: "upgrade-house",
      label: "Upgrade your house at least once"
    },
    {
      id: "get-barn",
      label: "Build a barn and coop"
    },
    {
      id: "strawberries",
      label: "Buy strawberry seeds at Egg Festival (Spring 13)"
    },
    {
      id: "get-backpack",
      label: "Upgrade your backpack"
    },
    {
      id: "friendships",
      label: "Build relationships with villagers (2+ hearts with everyone)"
    },
    {
      id: "crops-quality",
      label: "Start using quality fertilizer for better crop quality"
    },
    {
      id: "fishing-level",
      label: "Get fishing skill to level 6+ for better catches"
    }
  ]
};
