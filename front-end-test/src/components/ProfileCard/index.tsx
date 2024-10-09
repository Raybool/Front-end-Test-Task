"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

import * as motion from "framer-motion/client";
import { SliderCard } from "./Elements";
import { useAnimate } from "framer-motion";

export const ProfileCard: React.FC = () => {
  const [isProfile, setIsProfile] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isProfile) {
      animate(scope.current, { rotateY: 360 }, { duration: 2 });
    } else {
      animate(scope.current, { rotateY: 360 }, { duration: 2 });
    }
  }, [isProfile]);

  const onClick = useCallback(() => setIsProfile(!isProfile), [isProfile]);

  return (
    <motion.button
      ref={scope}
      className="w-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <SliderCard isProfile={isProfile} />
    </motion.button>
  );
};
