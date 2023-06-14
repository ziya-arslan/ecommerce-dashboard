import {
  AreaChart,
  Badge,
  Divider,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { CiCalendarDate, CiMoneyBill } from "react-icons/ci";
import {
  BiChevronDown,
  BiChevronUp,
  BiCommentDetail,
  BiLineChart,
} from "react-icons/bi";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { homeChart } from "../data/CHART_DATA";
import { lastOrders } from "../data/ORDER_DATA";

const Home = () => {
  const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className="px-12 pt-4 w-full">
      <div className="flex justify-between w-full items-center">
        <Title className="text-[26px] font-bold text-black">
          Hello, User 👋
        </Title>
        <Text className="flex items-center text-gray-800">
          14 June, 2023 <Icon icon={CiCalendarDate} className="text-inherit" />
        </Text>
      </div>
      <Divider />
      <div className="grid grid-cols-3 gap-2">
        <div className="w-full border-r items-center flex gap-4">
          <Icon
            icon={CiMoneyBill}
            size="xl"
            className="bg-gray-200 rounded-full text-black"
          />
          <div className="flex flex-col gap-2">
            <Text className="font-normal text-black">Earned</Text>
            <div className="flex items-center gap-2">
              <Text className="text-lg font-semibold text-black">
                150.000 COM
              </Text>
              <Text className="text-xs flex items-center" color="green">
                <Icon icon={BiChevronUp} size="sm" className="text-inherit" />
                +70.000 COM
              </Text>
            </div>
          </div>
        </div>

        <div className="w-full border-r items-center flex gap-4">
          <Icon
            icon={BiCommentDetail}
            size="xl"
            className="bg-gray-200 rounded-full text-black"
          />
          <div className="flex flex-col gap-2">
            <Text className="font-normal text-black">Reviews</Text>
            <div className="flex items-center gap-2">
              <Text className="text-lg font-semibold text-black">18</Text>
              <Text className="text-xs flex items-center" color="red">
                <Icon icon={BiChevronDown} size="sm" className="text-inherit" />
                -4
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full items-center flex gap-4">
          <Icon
            icon={BiLineChart}
            size="xl"
            className="bg-gray-200 rounded-full text-black"
          />
          <div className="flex flex-col gap-2">
            <Text className="font-normal text-black">Views</Text>
            <div className="flex items-center gap-2">
              <Text className="text-lg font-semibold text-black">1250</Text>
              <Text className="text-xs flex items-center" color="green">
                <Icon icon={BiChevronUp} size="sm" className="text-inherit" />
                +200
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="mt-4">
        <Title>Revenue</Title>
        <AreaChart
          className="h-72 mt-4"
          data={homeChart}
          index="date"
          categories={["SemiAnalysis", "The Pragmatic Engineer"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </div>
      <div className="mt-4">
        <Title>Last Orders</Title>
        <div className="flex flex-col">
          <Table>
            <TableBody>
              {lastOrders.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Text>{item.product}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.date_time.toString()}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge
                      color={
                        item.status === "Done"
                          ? "emerald"
                          : item.status === "On hold"
                          ? "neutral"
                          : "orange"
                      }
                      icon={StatusOnlineIcon}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
