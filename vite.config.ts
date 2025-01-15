import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const base = {
    plugins: [react()],
    root: './', 
    build: {
      outDir: 'dist', // 빌드 출력 디렉터리
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },

    css: {
          postcss: {
            plugins: [tailwindcss()],
          },
        },
    server:{
      port: 5173,
      open: true
    },
    publicDir: 'public' // 기본값, public 폴더 경로

  };

  /**
   * build command 일 때는 base 설정만 사용 합니다.
   */
  if ("build" === command) {
    return base;
  }

  /**
   * 개발 환경에서는 proxy를 사용 합니다.
   */
  const env = loadEnv(mode, process.cwd(), "");
  return {
    ...base,
    server: {
      proxy: {
        "/proxy": {
          target: env.VITE_FAKE_STORE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxy/, ""),
          secure: false,
          ws: true,
        },
      },
    },
  };
});

