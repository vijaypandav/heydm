/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const DashboardPage = async (props: Props) => {
  const user = await onBoardUser();
  if (user.status === 200 || user.status === 201) {
    const fullName = [user.data?.firstname, user.data?.lastname]
      .filter(Boolean)
      .join(" ");
    return redirect(`dashboard/${encodeURIComponent(fullName)}`);
  }

  return redirect("/sign-up");
};

export default DashboardPage;
