/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          <p className="text-[#9B9CA0]">This is the automation title</p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition">
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5">
        <p className="text-secondary text-sm">
          All pastes are automatically saved
        </p>
        <div className="flex gap-x-5">
          <p className="text-secondary text-sm">Changes Saved</p>
          <p className="text-secondary text-sm">Undo | Redo</p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;
