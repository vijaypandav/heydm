import { Contact, GitGraph, Home, Rocket, Settings } from "lucide-react";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <GitGraph />,
  CONTACTS: <Contact />,
  INTEGRATIONS: <Rocket />,
  SETTINGS: <Settings />,
  HOME: <Home />,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: ["f1", "f2", "f3"],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: ["f1", "f2", "f3"],
    cta: "Upgrade now",
  },
];
