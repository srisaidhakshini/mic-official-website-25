"use client";

import Image from "next/image";
import consoleImg from "./assets/console.png";

export default function Console() {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      <Image
        src={consoleImg}
        alt="Console"
        className="w-screen h-screen object-cover scale-[2] origin-center"
      />
    </div>
  );
}
