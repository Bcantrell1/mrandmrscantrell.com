import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const people = await prisma.person.findMany();
    return NextResponse.json(people);
}

export async function POST(request: Request) {
    try {
        const json = await request.json();

        const user = await prisma.person.create({
            data: json,
        });

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return new NextResponse("A person with that name already RSVPed", {
                status: 409,
            });
        }
        return new NextResponse(error.message, { status: 500 });
    }
}
