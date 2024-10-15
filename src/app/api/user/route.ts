import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { useAuth, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const db = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { firstName, lastName, imageUrl, email, clerkId } = data;

    const existingUser = await db.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });

    if (existingUser) {
      const user = existingUser;
      return new NextResponse(
        JSON.stringify({ message: "User already exists", user }),
        { status: 200 }
      );
    }

    const user = await db.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        email: email,
        clerkId: clerkId,
      },
    });

    return new NextResponse(JSON.stringify({ message: "User Created", user }), {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: "Error in creating user from api/user",
        details: err.message,
      }),
      {
        status: 500,
      }
    );
  }
};
