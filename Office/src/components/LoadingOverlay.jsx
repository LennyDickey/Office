import { useRef, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import "../styles/components/loading-overlay.css";

// Failsafe: never strand users on the overlay if an asset stalls
const MAX_OVERLAY_MS = 30000;

const LoadingOverlay = () => {
  const { progress, active } = useProgress();
  const seenActive = useRef(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (active) {
      seenActive.current = true;
    }
    if (seenActive.current && !active && !dismissed) {
      setDismissed(true);
    }
  }, [active, dismissed]);

  useEffect(() => {
    const failsafe = setTimeout(() => setDismissed(true), MAX_OVERLAY_MS);
    return () => clearTimeout(failsafe);
  }, []);

  if (dismissed || !active) return null;

  return (
    <div className="loading-overlay">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Summoning...</h2>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="loading-bar"
            style={{ "--progress": `${progress}%` }}
          />
        </div>
        <p className="text-white/70 text-sm">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
