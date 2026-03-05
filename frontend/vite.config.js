import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3000/',// this is used to proxy the requests to the backend server which is running on port 3000. so when we make a request to /api/jokes it will be proxied to http://localhost:3000/api/jokes.its very useful in development when we are running the frontend and backend on different ports. it helps us to avoid CORS issues.
    },
  },
  plugins: [react()],
})
