/* eslint-disable @typescript-eslint/no-empty-object-type */
import CreateAutomation from "@/components/global/create-automation";
import { Check } from "lucide-react";
import React from "react";

type Props = {};

const Automations = ({}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4">Automate list</div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
          <h2 className="text-xl">Automations</h2>
          <p className="text-secondary">
            All the live automations will show here
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium">Direct traffic towards website</h3>
                <p className="text-secondary text-sm">October 5th 2024</p>
              </div>
              <Check />
            </div>
          ))}
        </div>
        <CreateAutomation />
      </div>
    </div>
  );
};

export default Automations;
