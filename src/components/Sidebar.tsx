import { Icon, Title } from "@tremor/react";
import { navItems, settingNavItems } from "../data/NAV_ITEMS";

const Sidebar = () => {
  return (
    <div className="h-screen w-full max-w-[16rem] p-4 border-r flex flex-col">
      <div className="mb-2 p-4">
        <Title>Logo</Title>
      </div>
      <div className="flex flex-col gap-2 px-2 mt-10 flex-1">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            className="flex items-center text-gray-800 hover:bg-gray-300 py-2 rounded-lg"
          >
            <Icon icon={item.icon} className="text-inherit mr-2" />
            {item.label}
          </a>
        ))}
        <div className="mt-auto">
          {settingNavItems.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="flex items-center text-gray-500 hover:bg-gray-300 py-2 rounded-lg"
            >
              <Icon icon={item.icon} className="text-inherit mr-2" />{" "}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
