'use client';

import { ModelBox } from '@/components/ModelBox';
import { ProfileCard } from '@/components/ProfileCard';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex flex-row gap-8">
          <ModelBox />

          <ProfileCard />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <form
          method="get"
          className="flex flex-col gap-2 bg-[var(--card-background)] p-3 rounded-2xl"
        >
          <h2 className="text-[black]">Свяжитесь со мной:</h2>

          <motion.input
            whileHover={{ scale: 1.05 }}
            placeholder="Имя"
            className="text-[black]"
            type="text"
            name="name"
            id="name"
            required
          />

          <motion.input
            whileHover={{ scale: 1.05 }}
            placeholder="Email"
            className="text-[black]"
            type="email"
            name="email"
            id="email"
            required
          />

          <motion.textarea
            whileHover={{ scale: 1.05 }}
            className="text-[black]"
            placeholder="Сообщение"
            rows={5}
            cols={33}
            name="mail"
            id="mail"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-[black] bg-[var(--card-background-around)]"
          >
            Отправить
          </motion.button>
        </form>
      </footer>
    </div>
  );
}
