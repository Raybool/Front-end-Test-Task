import Image from "next/image";
import React from "react";
import { AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({ src, alt, styles }) => (
  <Image className={styles} src={src} alt={alt} width={500} height={500} />
);
