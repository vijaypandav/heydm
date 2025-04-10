/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React, { JSX } from "react";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <Button className="bg-white rounded-full py-6">
      <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  );
};

export default Notifications;
