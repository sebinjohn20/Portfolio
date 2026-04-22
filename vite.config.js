import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // ✅ MUST be root for Vercel

  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
          "vendor-gsap": ["gsap"],
          "vendor-motion": ["motion/react"],
          "vendor-firebase": [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
          ],
          "vendor-icons": ["react-icons/fi", "react-icons/vsc"],
          "vendor-aos": ["aos"],
        },
      },
    },
  },
});
