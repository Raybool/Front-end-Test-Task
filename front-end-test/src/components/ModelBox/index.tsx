"use client";

import React, { useState } from "react";

import { ModelView } from "../ModelView";
import { motion } from "framer-motion";

export const ModelBox: React.FC = () => {
  const [isAR, setIsAR] = useState(false);

  if (isAR) {
    return (
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
        renderer="antialias: true; alpha: true"
      >
        <a-camera gps-new-camera="gpsMinDistance: 5"></a-camera>
        <a-entity
          material="color: red"
          geometry="primitive: box"
          gps-new-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>"
          scale="10 10 10"
        ></a-entity>
      </a-scene>
    );
  }

  return (
    <div className="relative flex flex-col justify-center flex-1">
      <ModelView />

      <motion.button
        onClick={() => setIsAR(true)}
        className="bg-[var(--button-color)] rounded-xl p-3 absolute bottom-2 m-3"
        whileTap={{ scale: 0.9 }}
      >
        Просмотр в дополненной реальности
      </motion.button>
    </div>
  );
};
