"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const SPOTS = [
  "Bánh Mì Huỳnh Hoa",
  "Phở Thìn Lò Đúc",
  "Cơm Tấm Ba Ghiền",
  "Bún Bò Gánh",
  "Ốc Đào D1",
];

export default function InteractiveWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSelectedSpot(null);

    // Spin 3 to 5 full rotations + random angle
    const extraTurns = 3 + Math.floor(Math.random() * 3);
    const randomAngle = Math.floor(Math.random() * 360);
    const newRotation = rotation + extraTurns * 360 + randomAngle;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const chosen = SPOTS[Math.floor(Math.random() * SPOTS.length)];
      setSelectedSpot(chosen);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 w-full">
      {/* Wheel Container */}
      <div className="relative size-48 p-2 rounded-full bg-crave-accent-light shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center">
        {/* Pointer */}
        <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 z-20 w-3 h-4">
          <Image
            src="/assets/wheel-arrow-top.svg"
            alt="Pointer"
            width={12}
            height={16}
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>

        {/* Rotating Wheel graphic */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{
            duration: 2.5,
            ease: [0.15, 0.9, 0.25, 1], // Smooth decay
          }}
          className="relative size-full rounded-full overflow-hidden"
        >
          <Image
            src="/assets/wheel-center-badge.svg"
            alt="Radial Decider Wheel"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Spin Trigger Button */}
      <div className="pt-5 flex flex-col items-center">
        <motion.button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-crave-accent-light hover:bg-[#d6e5ff] text-crave-primary-hover text-[12px] font-semibold tracking-wide px-5 py-2 rounded-full transition-colors cursor-pointer"
        >
          {isSpinning
            ? "Đang quay..."
            : selectedSpot
            ? `🎯 ${selectedSpot}!`
            : "Tap to Spin • Random 5 Spots"}
        </motion.button>
      </div>
    </div>
  );
}
