"use client";

import { useEffect } from "react";

export default function ZoomLock() {
  useEffect(() => {
    const prevent = (event: Event) => {
      // #region agent log
      fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: "debug-session",
          runId: "pre-fix",
          hypothesisId: "H1",
          location: "components/ZoomLock.tsx:prevent",
          message: "Preventing gesture event",
          data: { type: event.type },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion agent log
      event.preventDefault();
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        // #region agent log
        fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: "debug-session",
            runId: "pre-fix",
            hypothesisId: "H2",
            location: "components/ZoomLock.tsx:handleWheel",
            message: "Preventing ctrl/meta+wheel zoom",
            data: { ctrlKey: event.ctrlKey, metaKey: event.metaKey },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion agent log
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const isZoomKey =
        (event.ctrlKey || event.metaKey) &&
        (event.key === "+" ||
          event.key === "-" ||
          event.key === "=" ||
          event.key === "0");

      if (isZoomKey) {
        // #region agent log
        fetch("http://127.0.0.1:7243/ingest/f303dccd-12c9-4eb5-9260-a4b62a14399e", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: "debug-session",
            runId: "pre-fix",
            hypothesisId: "H3",
            location: "components/ZoomLock.tsx:handleKeyDown",
            message: "Preventing keyboard zoom shortcut",
            data: { key: event.key, ctrlKey: event.ctrlKey, metaKey: event.metaKey },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion agent log
        event.preventDefault();
      }
    };

    document.addEventListener("gesturestart", prevent, { passive: false });
    document.addEventListener("gesturechange", prevent, { passive: false });
    document.addEventListener("gestureend", prevent, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("gesturestart", prevent);
      document.removeEventListener("gesturechange", prevent);
      document.removeEventListener("gestureend", prevent);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
