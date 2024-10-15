import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

const db = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const clerkId = req.headers.get("clerkId");

    const websites = await db.website.findMany({
      where: { clerkId: clerkId! },
    });

    // if (websites.length === 0) {
    //   return new NextResponse(
    //     JSON.stringify({
    //       error: "No Data",
    //     }),
    //     {
    //       status: 404,
    //     }
    //   );
    // }

    return new NextResponse(
      JSON.stringify({
        message: "Websites : ",
        website: websites,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error: "Error in creating website from",
        details: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request) => {
  const data = await req.json();

  const { clerkId, website, texts, images, icons, divs, btns, templateId } =
    data;

  try {
    const existingWebsite = await db.website.findUnique({
      where: {
        website: website,
      },
    });

    if (existingWebsite) {
      return new NextResponse(
        JSON.stringify({ message: "Website already exists" }),
        { status: 400 }
      );
    }

    for (let i = 0; i < images.length; i++) {
      if (images[i].Img_Url === "#") {
        const result = await cloudinary.uploader.upload(images[i].Img, {
          folder: "uploads",
          resource_type: "auto",
        });

        images[i].Img = "";
        images[i].Display_Img = "";
        images[i].Img_Url = result.url;
      }
    }

    const newWebsite = await db.website.create({
      data: {
        clerkId: clerkId,
        website: website,
        texts: texts,
        btns: btns,
        icons: icons,
        images: images,
        divs: divs,
        templateId: templateId,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Website Created", newWebsite }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        error: "Error in creating website from",
        details: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};
