import { GLTFLoader, KTX2Loader, MeshoptDecoder } from "three-stdlib";

export const HERO_MODEL_URL = "/models/LennysOffice.min.glb";
export const GAME_MODEL_URL = "/models/game.min.glb";

// Dedicated loader class: useLoader caches one loader instance per class,
// so subclassing gives our gltfpack-compressed models (KTX2 textures +
// meshopt geometry) their own GLTFLoader and keeps that setup off the
// shared loader used by every other useGLTF in the app (tech cards).
export class CompressedGLTFLoader extends GLTFLoader {}

// KTX2 transcoder support is detected against a specific WebGL renderer,
// so cache one KTX2Loader per renderer.
const ktx2LoaderByRenderer = new WeakMap();

// three-stdlib exports MeshoptDecoder as a factory function; instantiate once.
let meshoptDecoder;
function getMeshoptDecoder() {
  if (!meshoptDecoder) {
    meshoptDecoder =
      typeof MeshoptDecoder === "function" ? MeshoptDecoder() : MeshoptDecoder;
  }
  return meshoptDecoder;
}

export function getCompressedLoaderExtensions(gl) {
  let ktx2Loader = ktx2LoaderByRenderer.get(gl);
  if (!ktx2Loader) {
    ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath(`${import.meta.env.BASE_URL}basis/`);
    ktx2Loader.detectSupport(gl);
    ktx2LoaderByRenderer.set(gl, ktx2Loader);
  }

  return (loader) => {
    loader.setKTX2Loader(ktx2Loader);
    loader.setMeshoptDecoder(getMeshoptDecoder());
  };
}
