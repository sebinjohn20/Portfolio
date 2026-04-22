import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/portofolio/",
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom'],
          // Three.js ecosystem (heaviest)
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Animation libs
          'vendor-gsap': ['gsap'],
          'vendor-motion': ['motion/react'],
          // Firebase
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          // Icons
          'vendor-icons': ['react-icons/fi', 'react-icons/vsc'],
          // AOS
          'vendor-aos': ['aos'],
        },
      },
    },
  },
})
