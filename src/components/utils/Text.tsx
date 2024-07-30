"use client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
// Interface
interface Text_Props {
  cid: string;
  content: string;
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  classname?: string;
  href?: string;
  env?: "production" | "development";

  fontStyle?: string;
  fontSize?: number;
  textColor?: string;
  textAlignment?: string;
  textUnderline?: boolean;
  textItalic?: boolean;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
}
const Text = ({
  cid = nanoid(),
  content,
  tag,
  classname,
  href,
  env = "development",
  fontStyle,
  fontSize,
  textColor,
  textAlignment,
  textUnderline,
  textItalic,
  fontWeight,
  lineHeight,
  letterSpacing,
}: Text_Props) => {
  const [nanoId, setNanoId] = useState("");
  useEffect(() => {
    const generatedId = nanoid();
    setNanoId(generatedId);
  }, []);

  return <div>{nanoId}</div>;
};

export default Text;
