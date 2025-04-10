type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

import { PersonStanding } from "lucide-react";

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "ksefhkahfkahkah",
    icon: <PersonStanding />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Another",
    description: "ksefhkahfkahkah",
    icon: <PersonStanding />,
    strategy: "CRM",
  },
];
