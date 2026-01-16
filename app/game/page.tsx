"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import Scene from "../../components/Scene";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function GamePage() {
  return (
    <main className="relative h-screen w-screen" style={{ backgroundColor: "rgb(175, 153, 149)" }}>
      <div className="absolute left-4 top-4 z-10 flex items-center gap-3 text-black">
        <svg
          aria-hidden="true"
          className="h-7 w-7 rotate-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m20 20-4-4" />
        </svg>
        <div className="flex flex-col leading-none">
          <span
            className={`${montserrat.className} text-2xl font-normal uppercase`}
          >
            TZIO
          </span>
          <span className={`${montserrat.className} text-sm font-normal`}>
            Game
          </span>
        </div>
      </div>

      {/* Back to Home button */}
      <Link
        href="/"
        className={`${montserrat.className} absolute right-4 top-4 z-10 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 hover:scale-105`}
        style={{
          color: "#ffffff",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        ← Volver
      </Link>

      <Scene className="h-full w-full" sceneUrl="/scene.splinecode-game" />
    </main>
  );
}
