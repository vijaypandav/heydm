"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { usePath } from "@/hooks/use-nav";
import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import { FileQuestionIcon, Icon } from "lucide-react";
import ClerkAuthState from "../clerk-auth-state";
import UpgradeCard from "./upgrade";
import { SubscriptionPlan } from "../subscription-plan";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();
  return (
    <div className="w-[250px] fixed left-0 top-0 bottom-0 hidden lg:inline-block m-3 rounded-3xl overflow-hidden border-2 border-[#545454] bg-gradient-to-b from-[#768BDD] to-[#768BDD]">
      <div className="flex flex-col gap-y-5 w-full h-full p-4 bg-[#0e0e0e] bg-opacity-80 backdrop-blur-xl">
        <div className="flex items-center justify-center py-6 text-white font-bold text-xl">
          My Logo
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <FileQuestionIcon />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
