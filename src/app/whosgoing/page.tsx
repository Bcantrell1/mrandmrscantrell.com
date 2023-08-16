import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Person } from "@prisma/client";
import { prisma } from "@/lib/prisma";

async function getData(): Promise<Person[]> {
  // Fetch data from your API here.
  let people: Person[] = await prisma.person.findMany();
  return people;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

