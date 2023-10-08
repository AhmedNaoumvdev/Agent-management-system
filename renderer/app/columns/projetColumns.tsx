"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Projet = {
  id: string;
  type: string;
  address: string;
};

export const columns: ColumnDef<Projet>[] = [
  {
    accessorKey: "id",
    header: "Projet_id",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];
