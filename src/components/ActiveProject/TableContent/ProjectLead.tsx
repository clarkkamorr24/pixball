import Image from "next/image";
import React from "react";

const ProjectLead = ({ getValue }: any) => {
  return (
    <div className="flex items-center gap-3 dark:text-white text-black">
      <Image width={35} height={35} src={"/images/user/user.png"} alt="User" />
      <h3>{getValue()}</h3>
    </div>
  );
};

export default ProjectLead;
