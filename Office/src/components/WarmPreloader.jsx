import { useRef, useEffect } from "react";
import { useProgress, useGLTF } from "@react-three/drei";

import { GAME_MODEL_URL } from "./models/compressedGltfLoader";

const WarmPreloader = () => {
  const { active } = useProgress();
  const seenActive = useRef(false);
  const fired = useRef(false);

  useEffect(() => {
    if (active) {
      seenActive.current = true;
    }

    if (seenActive.current && !active && !fired.current) {
      fired.current = true;

      const run = () => {
        // Stage A: TechStack (next section users hit after Experience)
        import("../sections/TechStack");
        useGLTF.preload("/models/kawaii.glb");
        useGLTF.preload("/models/fund.glb");
        useGLTF.preload("/models/csharp.glb");

        // Stage B: Contact + game model (queued after A)
        const runB = () => {
          import("../sections/Contact");
          // The game model loads through the dedicated CompressedGLTFLoader,
          // which needs a live WebGL context — so just warm the HTTP cache
          // here; the real load in Game.jsx is then served from cache.
          fetch(GAME_MODEL_URL)
            .then((res) => res.arrayBuffer())
            .catch(() => {});

          // Stage C: Footer (lowest priority)
          const runC = () => {
            import("../sections/Footer");
          };

          if ("requestIdleCallback" in window) {
            requestIdleCallback(runC, { timeout: 3000 });
          } else {
            setTimeout(runC, 400);
          }
        };

        if ("requestIdleCallback" in window) {
          requestIdleCallback(runB, { timeout: 3000 });
        } else {
          setTimeout(runB, 200);
        }
      };

      if ("requestIdleCallback" in window) {
        requestIdleCallback(run, { timeout: 2000 });
      } else {
        setTimeout(run, 200);
      }
    }
  }, [active]);

  return null;
};

export default WarmPreloader;
