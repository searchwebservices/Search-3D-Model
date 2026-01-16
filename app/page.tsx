"use client";

import { useState, useEffect, useCallback } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Scene from "../components/Scene";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function TzioHomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  const [line3Visible, setLine3Visible] = useState(false);
  const [instructionVisible, setInstructionVisible] = useState(false);
  const [fadeOutIntro, setFadeOutIntro] = useState(false);

  const dismissIntro = useCallback(() => {
    if (!fadeOutIntro && instructionVisible) {
      setFadeOutIntro(true);
      setTimeout(() => setShowIntro(false), 1000);
    }
  }, [fadeOutIntro, instructionVisible]);

  useEffect(() => {
    // Animate lines appearing one by one
    const timer1 = setTimeout(() => setLine1Visible(true), 300);
    const timer2 = setTimeout(() => setLine2Visible(true), 1000);
    const timer3 = setTimeout(() => setLine3Visible(true), 1700);
    const timer4 = setTimeout(() => setInstructionVisible(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        dismissIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dismissIntro]);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Intro Screen */}
      {showIntro && (
        <div
          onClick={dismissIntro}
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-1000 ${
            fadeOutIntro ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: "rgb(175, 153, 149)" }}
        >
          <div className="flex flex-col items-center gap-8 px-8 text-center">
            {/* Line 1: TZIO */}
            <div
              className={`transition-all duration-700 ease-out ${
                line1Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1
                className={`${montserrat.className} text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] font-bold tracking-wider`}
                style={{
                  color: "#ffffff",
                  textShadow: "0 4px 30px rgba(0, 0, 0, 0.4), 0 8px 60px rgba(0, 0, 0, 0.2)",
                }}
              >
                TZIO
              </h1>
            </div>

            {/* Line 2: a SEARCH Collaboration */}
            <div
              className={`transition-all duration-700 ease-out ${
                line2Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p
                className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide px-6 py-3 rounded-xl`}
                style={{
                  color: "#ffffff",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                una Colaboración con SEARCH
              </p>
            </div>

            {/* Line 3: Disclaimer */}
            <div
              className={`transition-all duration-700 ease-out ${
                line3Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p
                className={`${montserrat.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal max-w-4xl px-6 py-3 rounded-xl`}
                style={{
                  color: "#ffffff",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                Este no es tu proyecto, esto sirve para mostrar lo que podemos producir
              </p>
            </div>
          </div>

          {/* Instruction at bottom */}
          <div
            className={`absolute bottom-12 left-0 right-0 flex justify-center transition-all duration-700 ease-out ${
              instructionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p
              className={`${montserrat.className} text-base sm:text-lg md:text-xl font-normal px-6 py-3 rounded-full`}
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              Presiona espacio o haz clic para continuar
            </p>
          </div>
        </div>
      )}

      {/* Main Content - TZIO 3D Scene */}
      <div
        className={`h-full w-full transition-opacity duration-1000 ${
          showIntro && !fadeOutIntro ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundColor: "rgb(175, 153, 149)" }}
      >
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
              3D Model Web App
            </span>
          </div>
        </div>

        {/* Nav button to Game */}
        <Link
          href="/game"
          className={`${montserrat.className} absolute right-4 top-4 z-10 px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 hover:scale-105`}
          style={{
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          Game →
        </Link>

        <Scene className="h-full w-full" sceneUrl="/scene.splinecode-tzio" />
      </div>
    </main>
  );
}
