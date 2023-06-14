import { Icon, Text, Title } from "@tremor/react";
import { CiCalendarDate, CiMoneyBill } from "react-icons/ci";

const Home = () => {
  return (
    <div className="px-12 pt-4 w-full">
      <div className="flex justify-between w-full items-center">
        <Title className="text-4xl">Hello, User 👋</Title>
        <Text className="flex items-center text-gray-800">
          14 June, 2023 <Icon icon={CiCalendarDate} className="text-inherit" />
        </Text>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div className="w-full border-r h-20 items-center flex">
          <Icon
            icon={CiMoneyBill}
            size="xl"
            className="bg-gray-300 rounded-full text-gray-800"
          />
        </div>
        <div className="w-full border-r"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Home;
