import { useLoader, useThree } from '@react-three/fiber'

import {
  getCompressedLoaderExtensions,
  CompressedGLTFLoader,
  GAME_MODEL_URL,
} from '../compressedGltfLoader'

export function Computer(props) {
  const { gl } = useThree()
  // Render the loaded scene graph as-is: gltfpack quantizes vertex data and
  // bakes the de-quantization scale into the node transforms, so meshes must
  // keep their place in the hierarchy (rebuilding from nodes.X.geometry under
  // hardcoded groups renders at the wrong scale).
  const { scene } = useLoader(
    CompressedGLTFLoader,
    GAME_MODEL_URL,
    getCompressedLoaderExtensions(gl)
  )

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

export default Computer;
