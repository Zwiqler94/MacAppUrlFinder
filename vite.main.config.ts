import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "/Users/jacobzwickler/Documents/GitHub/mac-app-urls/.api/apis/iconfinder",
    ],
  },
  resolve: {
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
  },
 
});
