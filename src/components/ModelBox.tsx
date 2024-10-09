'use client';

import React, { useState } from 'react';

import { ModelView } from './ModelView';
import { motion } from 'framer-motion';

export const ModelBox: React.FC = () => {
  const [isAR, setIsAR] = useState(false);

  if (isAR) {
    return <h1>Тут будет AR!!! </h1>;
  }

  return (
    <div className="relative items-center flex flex-col justify-center flex-1">
      <ModelView />

      <motion.button
        onClick={() => setIsAR(true)}
        className="bg-[var(--button-color)] rounded-xl p-3 absolute bottom-2 m-3"
        whileTap={{ scale: 1.05 }}
      >
        Просмотр в дополненной реальности
      </motion.button>
    </div>
  );
};
