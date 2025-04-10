/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import InfoBar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = async ({ children, params }: Props) => {
  const { slug } = await params;
  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={slug} />
      {/* InfoBar */}
      <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
        <InfoBar slug={slug} />
        {children}
      </div>
    </div>
  );
};

export default layout;
