import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export const GET = async (req: any, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    const user = await db.user.findUnique({
      where: { clerkId: id },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err: any) {
    return new NextResponse(
      "Error in getting user infromation : " + err.message,
      {
        status: 500,
      }
    );
  }
};
