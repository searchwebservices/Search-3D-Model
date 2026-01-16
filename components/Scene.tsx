"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

type SceneProps = {
  className?: string;
  sceneUrl?: string;
};

// #region agent log
fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    sessionId: "debug-session",
    runId: "pre-fix",
    hypothesisId: "H4",
    location: "components/Scene.tsx:module",
    message: "Scene module evaluated",
    data: {
      splineType: typeof Spline,
      splineName: (Spline as unknown as { name?: string })?.name,
      splineCtorName:
        (Spline as unknown as { constructor?: { name?: string } })?.constructor
          ?.name ?? null,
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion agent log

export default function Scene({ className, sceneUrl = "/scene.splinecode" }: SceneProps) {
  // #region agent log
  fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H1",
      location: "components/Scene.tsx:Scene:entry",
      message: "Scene render start",
      data: { className, sceneUrl },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion agent log

  // #region agent log
  fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H2",
      location: "components/Scene.tsx:Scene:beforeSpline",
      message: "About to render Spline component",
      data: { scene: sceneUrl },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion agent log

  useEffect(() => {
    // #region agent log
    fetch(
      "http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: "debug-session",
          runId: "pre-fix",
          hypothesisId: "H3",
          location: "components/Scene.tsx:Scene:useEffect",
          message: "Scene mounted",
          data: { className, sceneUrl },
          timestamp: Date.now(),
        }),
      }
    ).catch(() => {});
    // #endregion agent log
  }, [className, sceneUrl]);

  return <Spline className={className} scene={sceneUrl} />;
}
