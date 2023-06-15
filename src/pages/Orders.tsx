import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
  Color,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import { ordersData } from "../data/ORDER_DATA";
import { useState } from "react";

const Orders = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>();

  const colors: { [key: string]: Color } = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
  };

  return (
    <div>
      <Flex justifyContent="start" className="space-x-2">
        <Title>Orders</Title>
        <Badge color="gray">8</Badge>
      </Flex>
      <Text className="mt-2">Overview of this month's purchases</Text>
      <MultiSelect
        onValueChange={setSelectedItem}
        placeholder="Select Salespeople..."
        className="max-w-xs mt-10"
      >
        {ordersData.map((item) => (
          <MultiSelectItem key={item.user} value={item.user}>
            {item.user}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-2">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Transaction ID</TableHeaderCell>
            <TableHeaderCell>User</TableHeaderCell>
            <TableHeaderCell>Item</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {ordersData.map((item) => (
            <TableRow key={item.transactionID}>
              <TableCell>{item.transactionID}</TableCell>
              <TableCell>{item.user}</TableCell>
              <TableCell>{item.item}</TableCell>
              <TableCell>
                <Badge color={colors[item.status]} size="xs">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{item.amount}</TableCell>
              <TableCell>
                <Button size="xs" variant="secondary" color="gray">
                  See details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
