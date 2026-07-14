import * as THREE from "three";

/**
 * Walk a loaded scene graph and swap every mesh's MeshStandardMaterial
 * for an unlit MeshBasicMaterial (shared per source material, originals
 * disposed), keeping the original texture map untouched by lighting or
 * tone mapping.
 *
 * @param {THREE.Object3D} scene
 * @returns {THREE.Object3D} the same scene, modified in-place
 */
export function convertSceneToBasic(scene) {
  const basicBySource = new Map();

  scene.traverse((obj) => {
    if (!obj.isMesh || !(obj.material instanceof THREE.MeshStandardMaterial))
      return;

    const src = obj.material;
    let basic = basicBySource.get(src);

    if (!basic) {
      basic = new THREE.MeshBasicMaterial({
        map: src.map,
        alphaMap: src.alphaMap,
        transparent: src.transparent || !!src.alphaMap,
        opacity: src.opacity,
        side: src.side,
        toneMapped: false, // keep colours 1-to-1
      });
      basic.name = src.name;
      basicBySource.set(src, basic);
    }

    obj.material = basic;
  });

  basicBySource.forEach((_basic, src) => src.dispose());

  return scene;
}
