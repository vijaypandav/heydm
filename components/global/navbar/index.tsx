"use client";

import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/use-nav";
import { FileQuestionIcon, Menu } from "lucide-react";
import React from "react";
import Sheet from "../sheet";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import { SheetTitle } from "@/components/ui/sheet";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePath();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          {/* Mobile sidebar */}
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet trigger={<Menu />} className="lg:hidden" side="left">
              {/* ✅ Accessibility title */}
              <SheetTitle>Navigation</SheetTitle>
              <div className="flex flex-col gap-y-5 w-full h-full p-4 bg-[#0e0e0e] bg-opacity-80 backdrop-blur-xl">
                <div className="flex items-center justify-center py-6 text-white font-bold text-xl">
                  My Logo
                </div>
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug} />
                </div>
                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  />
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
            </Sheet>
          </span>
        </div>
      </div>
    )
  );
};

export default Navbar;
