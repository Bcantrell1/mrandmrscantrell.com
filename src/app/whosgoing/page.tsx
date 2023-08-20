'use client';

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Person } from "@prisma/client";
import { useEffect, useState } from 'react';

export default function DemoPage() {
  const [data, setData] = useState<Person[]>([]);

  async function getData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/person/`, {
        method: "GET",
      });
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {data.length > 0 ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

