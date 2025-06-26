// utils/convertMaterialsToBasic.jsx
import * as THREE from "three";

/**
 * Replace every MeshStandardMaterial in a `materials` object
 * (returned by useGLTF) with a MeshBasicMaterial while keeping
 * the original texture map, alpha, opacity, and side settings.
 *
 * @param {Object<string, THREE.Material>} materials
 * @returns {Object<string, THREE.Material>} the same object, modified in-place
 */
export function convertMaterialsToBasic(materials) {
  Object.keys(materials).forEach((key) => {
    const src = materials[key];

    if (src instanceof THREE.MeshStandardMaterial) {
      const basic = new THREE.MeshBasicMaterial({
        map: src.map,
        alphaMap: src.alphaMap,
        transparent: src.transparent || !!src.alphaMap,
        opacity: src.opacity,
        side: src.side,
        toneMapped: false, // keep colours 1-to-1
      });

      basic.name = src.name || key;
      materials[key] = basic; // overwrite reference used by meshes
      src.dispose(); // free GPU memory
    }
  });

  return materials;
}
