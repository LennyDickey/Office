import { KTX2Loader, MeshoptDecoder } from "three-stdlib";

export const HERO_MODEL_URL = "/models/rawdog_compressed.glb";

const loaderConfigByRenderer = new WeakMap();

function createLoaderConfig(gl) {
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(`${import.meta.env.BASE_URL}basis/`);
  ktx2Loader.detectSupport(gl);

  return {
    extendLoader: (loader) => {
      loader.setKTX2Loader(ktx2Loader);
      loader.setMeshoptDecoder(MeshoptDecoder);
    },
  };
}

export function getHeroExtendLoader(gl) {
  let config = loaderConfigByRenderer.get(gl);
  if (!config) {
    config = createLoaderConfig(gl);
    loaderConfigByRenderer.set(gl, config);
  }

  return config.extendLoader;
}

