/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import React from "react";
import Spinner from "./spinner";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ children, state, className, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
