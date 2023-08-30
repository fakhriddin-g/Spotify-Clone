// vite.config.js
import {
  resolve
} from 'path'
import {
  defineConfig
} from 'vite'

export default defineConfig({
  build: {
      rollupOptions: {
          input: {
              main: resolve(__dirname, 'index.html'),
              album: resolve(__dirname, '/pages/album/index.html'),
              artist: resolve(__dirname, '/pages/artist/index.html'),
              genre: resolve(__dirname, '/pages/genre/index.html'),
              playlist: resolve(__dirname, '/pages/playlist/index.html'),
              search: resolve(__dirname, '/pages/search/index.html')
          },
      },
  },
})