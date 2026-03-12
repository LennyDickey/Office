import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { getHeroExtendLoader, HERO_MODEL_URL } from "./heroGltfLoader";

export default function Room(props) {
  const { gl } = useThree();
  const { scene } = useGLTF(
    HERO_MODEL_URL,
    false,
    true,
    getHeroExtendLoader(gl)
  );

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
