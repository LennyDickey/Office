import { useMemo } from "react";
import { useLoader, useThree } from "@react-three/fiber";

import { convertSceneToBasic } from "../convertToBasic";
import {
  getHeroLoaderExtensions,
  HeroGLTFLoader,
  HERO_MODEL_URL,
} from "./heroGltfLoader";

export default function Room(props) {
  const { gl } = useThree();
  const { scene } = useLoader(
    HeroGLTFLoader,
    HERO_MODEL_URL,
    getHeroLoaderExtensions(gl)
  );

  // Textures are baked; show them unlit at full brightness like the
  // original uncompressed model did.
  useMemo(() => convertSceneToBasic(scene), [scene]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
