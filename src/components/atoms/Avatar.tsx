import Image from 'next/image';
import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  styles?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt, styles }) => (
  <Image className={styles} src={src} alt={alt} width={100} height={100} />
);
