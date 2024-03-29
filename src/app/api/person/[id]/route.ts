import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const user = await prisma.person.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return new NextResponse("No person with ID found", { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  let json = await request.json();

  const updated_user = await prisma.person.update({
    where: { id },
    data: json,
  });

  if (!updated_user) {
    return new NextResponse("No person with ID found", { status: 404 });
  }

  return NextResponse.json(updated_user);
}

export async function DELETE(
 request: Request, params:any 
) {
  try {
    const id = Number(params.params.id);
    console.log(id);
    await prisma.person.delete({
      where: { id }, 
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("No person with ID found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
