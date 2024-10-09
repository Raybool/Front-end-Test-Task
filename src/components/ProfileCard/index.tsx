'use client';

import React, { useState } from 'react';

import * as motion from 'framer-motion/client';
import { SliderCard } from './Elements';

export const ProfileCard: React.FC = () => {
  const [isProfile, setIsProfile] = useState(false);

  const onClick = () => setIsProfile((state) => !state);

  return (
    <motion.button
      className="flex-1 max-h-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotateY: 90 }}
      onClick={onClick}
    >
      <SliderCard isProfile={isProfile} />
    </motion.button>
  );
};
