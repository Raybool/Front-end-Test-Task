import { SliderCardProps } from "./types";

import React from "react";
import { Avatar } from "../atoms/Avatar";

export const SliderCard: React.FC<SliderCardProps> = ({ isProfile }) => (
  <>
    {isProfile ? (
      <div
        style={{ height: 400 }}
        className="flex flex-row gap-2 justify-between items-center bg-[var(--card-background-around)] rounded-2xl p-10 px-10 w-full "
      >
        <h1 className="text-black">ТУТ МОГЛА БЫТЬ ВАША РЕКЛАМА</h1>
      </div>
    ) : (
      <div
        style={{ height: 400 }}
        className="flex flex-row gap-2 justify-between items-center bg-[var(--card-background)] rounded-2xl p-10 px-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-black">Привет всем!</h1>
          <h2 className="text-black">Я Frontend разработчик!</h2>
        </div>

        <Avatar
          src="/img/avatar.png"
          alt="Аватар"
          styles="rounded-full h-1/2 w-1/2"
        />
      </div>
    )}
  </>
);
