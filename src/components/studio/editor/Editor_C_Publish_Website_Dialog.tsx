import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { titillium_Web } from "@/constants/studio/font_list";
import { Loader } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Editor_C_Publish_Website_Dialog = () => {
  const [texts, setTexts] = useState([]);
  const [images, setImages] = useState([]);
  const [btns, setBtns] = useState([]);
  const [icons, setIcons] = useState([]);
  const [divs, setDivs] = useState([]);

  const [websiteName, setWebsiteName] = useState("");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const {
        type,
        Text_Components,
        Btn_Components,
        Icon_Components,
        Image_Components,
        Div_Components,
      } = event.data;
      if (type === "PUBLISH_DATA") {
        setTexts(Text_Components);
        setBtns(Btn_Components);
        setIcons(Icon_Components);
        setImages(Image_Components);
        setDivs(Div_Components);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const [userId, setUserId] = useState("");
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData") || "");
    setUserId(localStorageData.clerkId);
  }, []);

  // Loading
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const path = usePathname();

  const templateId = path.slice(8);

  const [error, setError] = useState("");
  const [loadingMsg, setLoadingMsg] = useState(false);

  const handlePublish = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      setLoadingMsg(true);
      setError("");
      const res = await fetch("/api/website/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: userId,
          website: websiteName,
          texts: texts,
          btns: btns,
          icons: icons,
          images: images,
          divs: divs,
          templateId: templateId,
        }),
      });

      const data = await res.json();

      if (data.message === "Website Created") {
        router.push(`/web/${websiteName}`);
      } else if (data.message === "Website already exists") {
        setError("The name you entered is already in use. Please try another.");
        setLoadingMsg(false);
      }
    } catch (err: any) {
      router.push(`/web/${websiteName}`);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
      if (!error) {
        setLoadingMsg(true);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex animate-shimmer cursor-pointer items-center justify-center rounded-[8px] border border-neutral-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[24px] py-[8px] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Publish Website
        </button>
      </DialogTrigger>
      <DialogContent
        className={`${titillium_Web.className} bg-black text-white sm:max-w-[425px]`}
      >
        <form onSubmit={handlePublish}>
          <DialogHeader>
            <DialogTitle className="text-[24px]">Publish Website</DialogTitle>
            <DialogDescription className="texrt-[18px]">
              Make sure your website name must be unique.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name :
              </Label>
              <Input
                required
                id="name"
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
                placeholder="my-web-weaver-web"
                className="col-span-5"
              />
            </div>
            {error ? (
              <h1 className="text-center text-[14px] text-red-500">{error}</h1>
            ) : (
              loadingMsg && (
                <h1 className="text-center text-[14px] text-green-500">
                  Crafting your website… almost ready!
                </h1>
              )
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Cancel</Button>
            </DialogClose>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex animate-shimmer cursor-pointer items-center justify-center rounded-[8px] border border-neutral-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[24px] py-[8px] text-[18px] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {isLoading ? (
                <div className="animate-spin">
                  <Loader size={18} color="#ffffff" />
                </div>
              ) : (
                "Publish"
              )}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Editor_C_Publish_Website_Dialog;
