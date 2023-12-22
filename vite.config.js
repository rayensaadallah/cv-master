import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//1
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  base:"/cv-master/",
  server: {
    port: 3000,
  },
  
})
