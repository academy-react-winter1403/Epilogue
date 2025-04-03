import { TableColumn, TableHeader } from "@heroui/react";
import React from "react";

const ComplexTableHeader = () => {
    const columns = [
        {
          key: "name",
          label: "NAME",
        },
        {
          key: "role",
          label: "ROLE",
        },
        {
          key: "status",
          label: "STATUS",
        },
      ];
  return (
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
  );
};

export default ComplexTableHeader;
