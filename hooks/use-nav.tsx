"use client";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { usePathname } from "next/navigation";

export const usePath = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  let page = path[path.length - 1]; //Get the last part of the route
  return { page, pathname };
};
