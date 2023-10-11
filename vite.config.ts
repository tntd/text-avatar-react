import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import libCss from 'vite-plugin-libcss';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  plugins: [
    react(),
    libCss(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ],
  server: {
    port: 8001,
    open: true
  },
  build: {
    outDir: 'dist',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    cssCodeSplit:true,
    lib: {
      entry: resolve('src/index.ts'),
      formats:['es','umd'],                       // formats  ['es','cjs','umd','iife']
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],     // 确保外部化处理那些你不想打包进库的依赖
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
});
