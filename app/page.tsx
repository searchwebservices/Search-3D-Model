import { Montserrat } from "next/font/google";
import Scene from "../components/Scene";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  // #region agent log
  fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H5",
      location: "app/page.tsx:Home:entry",
      message: "Home render start",
      data: { hasWindow: typeof window !== "undefined" },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion agent log

  return (
    <main className="relative h-screen w-screen bg-[#ffb6c1]">
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
            Search
          </span>
          <span className={`${montserrat.className} text-sm font-normal`}>
            3D Model Web App
          </span>
        </div>
      </div>
      <Scene className="h-full w-full" />
    </main>
  );
}
