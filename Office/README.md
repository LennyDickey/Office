## <a name="tech-stack">⚙️ Tech Stack</a>

- Three.js
- React Three Fiber
- Drei
- GSAP
- Tailwind CSS
- Vite
- React 19

## <a name="features">🔋 Features</a>

### Features of the 3D Portfolio Project

👉 Animated 3D models and reveal animations

👉 Realistic lighting and shadows

👉 GSAP-powered scroll interactions

👉 Responsive design with Tailwind CSS and Flexbox/Grid

👉 Micro Interactions

👉 Multi-section layout (About, Projects, Contact)

👉 Mobile optimized 3D experience

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Replace the placeholder values with your actual **[EmailJS](https://www.emailjs.com/)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.
# Port

## 3D Model Compression

The hero model served at `public/models/LennysOffice.min.glb` is generated from
the raw export in `raw_assets/LennysOffice.glb` with
[gltfpack](https://github.com/zeux/meshoptimizer) (`npm i -g gltfpack`):

```bash
gltfpack -i raw_assets/LennysOffice.glb -o public/models/LennysOffice.min.glb -tc
```

`-tc` transcodes textures to KTX2/BasisU, which is decoded at runtime by the
transcoder in `public/basis/`.
