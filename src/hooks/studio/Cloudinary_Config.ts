import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
    });
    console.log("File Uploaded");
    return res;
  } catch (err) {
    fs.unlinkSync(localFilePath);
    console.log("File Upload Error : " + err);
  }
};
