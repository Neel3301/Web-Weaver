"use client";

import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";

const V2 = () => {
  const { user } = useUser();
  const router = useRouter();

  const createUser = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user?.firstName,
          lastName: user?.lastName,
          imageUrl: user?.imageUrl,
          email: user?.emailAddresses[0].emailAddress,
          clerkId: user?.id,
        }),
      });

      const data = await res.json();

      if (data.user) {
        const userId = data.user.clerkId;
        localStorage.setItem("userData", JSON.stringify(data.user));
        router.push(`/dashboard/${userId}`);
      }
    } catch (err: any) {
      console.log("Error: Frontend :  " + err.message);
    }
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");

    if (!localStorageData && user) {
      createUser();
    } else if (localStorageData) {
      const parsedData = JSON.parse(localStorageData!);
      router.push(`/dashboard/${parsedData.clerkId}`);
    }
  }, [user]);

  return <Loading msg="Just a moment! Setting up your dashboard..." />;
};

export default V2;
