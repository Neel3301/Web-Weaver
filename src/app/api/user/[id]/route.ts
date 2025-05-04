import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

let db: PrismaClient;

function getDbClient() {
  if (!db) {
    db = new PrismaClient();
  }
  return db;
}

export const GET = async (req: any, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const db = getDbClient(); // 🐢 Only create PrismaClient when needed

    const user = await db.user.findUnique({
      where: { clerkId: id },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err: any) {
    return new NextResponse(
      "Error in getting user information: " + err.message,
      { status: 500 }
    );
  }
};
