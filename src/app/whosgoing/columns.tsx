"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Person } from "@prisma/client";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },{
    accessorKey: "name",
    header: "Name",
  },{
    accessorKey: "updatedAt",
    header: "Last Updated",
  },{
    accessorKey: "createdAt",
    header: "Created At",
  },
]

