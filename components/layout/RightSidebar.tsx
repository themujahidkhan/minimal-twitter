import { FaSearch } from "react-icons/fa";
import React from "react";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="hidden lg:flex gap-4 relative">
        <FaSearch size={16} className="absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          className="bg-neutral-800 p-2 rounded-full w-full indent-10 placeholder:text-gray-500 "
          placeholder="Search Twitter"
        />
      </div>
      <div className="bg-neutral-800 rounded-xl p-4 mt-16">
        <h2 className="text-white text-xl font-semibold">Who To Follow</h2>
        <div className="flex flex-col gap-6 mt-4">{/* TODO: Users List */}</div>
      </div>
    </div>
  );
};

export default RightSidebar;
