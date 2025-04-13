/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import Trigger from "@/components/global/automations/trigger";
import AutomationBreadCrumb from "@/components/global/bread-crumbs/automations";
import { FileWarningIcon } from "lucide-react";
import React from "react";

type Props = {
  params: { id: string };
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2">
          <FileWarningIcon />
          When...
        </div>
        <Trigger id={id} />
      </div>
    </div>
  );
};

export default page;
