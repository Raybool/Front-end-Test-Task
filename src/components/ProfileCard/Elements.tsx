import React from 'react';
import { Avatar } from '@/components/atoms/Avatar';

type SliderCardProps = {
  isProfile: boolean;
};

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
      <div className="flex flex-row gap-2 justify-center items-center bg-[var(--card-background)] rounded-2xl p-10 px-10 flex-wrap ">
        <div className="flex flex-col gap-4">
          <h1 className="text-black">Привет всем!</h1>
          <h2 className="text-black">Я Frontend разработчик!</h2>
        </div>

        <Avatar src="/img/avatar.png" alt="Аватар" styles="rounded-full" />
      </div>
    )}
  </>
);
