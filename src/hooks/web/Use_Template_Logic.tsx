"use client";
import { use_Btn_Store } from "@/store/utils/Btn_Store";
import { use_Div_Store } from "@/store/utils/Div_Store";
import { use_Icon_Store } from "@/store/utils/Icon_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { use_Text_Store } from "@/store/utils/Text_Store";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useTemplateLogic = () => {
  // Imports From Utils Stores
  const Text_Components = use_Text_Store((s) => s.Text_Components);
  const Btn_Components = use_Btn_Store((s) => s.Btn_Components);
  const Icon_Components = use_Icon_Store((s) => s.Icon_Components);
  const Image_Components = use_Image_Store((s) => s.Image_Components);
  const Div_Components = use_Div_Store((s) => s.Div_Components);

  // Import From Utils Store -- Update Components
  const Update_Text_Components = use_Text_Store(
    (s) => s.Update_Text_Components
  );
  const Update_Btn_Components = use_Btn_Store((s) => s.Update_Btn_Components);
  const Update_Image_Components = use_Image_Store(
    (s) => s.Update_Image_Components
  );
  const Update_Div_Components = use_Div_Store((s) => s.Update_Div_Components);
  const Update_Icon_Components = use_Icon_Store(
    (s) => s.Update_Icon_Components
  );

  // Setting Env
  const path = usePathname();
  const searchParams = useSearchParams();
  const env =
    searchParams.get("editor") === "true" ? "development" : "production";

  // Loading State
  const [loading, setLoading] = useState(true);

  // Fetch Data If Production Mode
  useEffect(() => {
    if (env === "production") {
      const webId = path.slice(5);

      const fetchData = async () => {
        const res = await fetch(`/api/website/${webId}`, {
          method: "GET",
        });

        const data = await res.json();
        Update_Text_Components(data.texts);
        Update_Image_Components(data.images);
        Update_Btn_Components(data.btns);
        Update_Icon_Components(data.icons);
        Update_Div_Components(data.divs);
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, [env]);

  // Send Data If In Development Mode
  useEffect(() => {
    if (env === "development") {
      window.parent.postMessage(
        {
          type: "PUBLISH_DATA",
          Text_Components: Text_Components,
          Btn_Components: Btn_Components,
          Icon_Components: Icon_Components,
          Image_Components: Image_Components,
          Div_Components: Div_Components,
        },
        "*"
      );
    } else {
      setLoading(false);
    }
  }, [
    env,
    Text_Components,
    Btn_Components,
    Icon_Components,
    Image_Components,
    Div_Components,
  ]);

  return loading;
};

export default useTemplateLogic;
