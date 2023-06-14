import { Icon, Title } from "@tremor/react";
import {
  CiGrid31,
  CiShop,
  CiUser,
  CiCircleInfo,
  CiCircleMinus,
} from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="h-screen w-full max-w-[16rem] p-4 border-r flex flex-col">
      <div className="mb-2 p-4">
        <Title>Logo</Title>
      </div>
      <div className="flex flex-col gap-2 px-2 mt-10 flex-1">
        <a
          href="#"
          className="flex items-center text-gray-800 hover:bg-gray-300 py-2 rounded-lg"
        >
          <Icon icon={CiGrid31} className="text-inherit mr-2" />
          Home
        </a>
        <a
          href="#"
          className="flex items-center text-gray-500 hover:bg-gray-300 py-2 rounded-lg"
        >
          <Icon icon={CiShop} className="text-inherit mr-2" />
          Orders
        </a>
        <a
          href="#"
          className="flex items-center text-gray-500 hover:bg-gray-300 py-2 rounded-lg"
        >
          <Icon icon={CiUser} className="text-inherit mr-2" /> Stuff
        </a>
        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center text-gray-500 hover:bg-gray-300 py-2 rounded-lg"
          >
            <Icon icon={CiCircleInfo} className="text-inherit mr-2" /> Help &
            information
          </a>
          <a
            href="#"
            className="flex items-center text-gray-500 hover:bg-gray-300 py-2 rounded-lg"
          >
            <Icon icon={CiCircleMinus} className="text-inherit mr-2" />
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
