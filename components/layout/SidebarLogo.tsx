import { BsTwitter } from "react-icons/bs";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const SidebarLogo = (props: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
    rounded-full
    h-14
    w-14
    p-4
    items-center
    justify-center
    hover:bg-blue-300
    hover:bg-opacity-10
    cursor-pointer
    transition
  "
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
