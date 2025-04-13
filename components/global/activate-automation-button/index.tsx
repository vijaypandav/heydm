/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActivitySquare } from "lucide-react";

type Props = {};

const ActivateAutomationButton = ({}: Props) => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] mx-2">
      <Loader state={false}>
        <ActivitySquare />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
