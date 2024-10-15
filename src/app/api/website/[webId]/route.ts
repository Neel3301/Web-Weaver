import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export const GET = async (
  req: any,
  { params }: { params: { webId: string } }
) => {
  try {
    const { webId } = params;
    const website = await db.website.findUnique({
      where: { website: webId },
    });

    return new NextResponse(JSON.stringify(website), {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse("Error in getting texts data : " + err.message, {
      status: 500,
    });
  }
};
