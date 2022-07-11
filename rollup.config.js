import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
// import external from "rollup-plugin-auto-external";
// import { terser } from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code,
    }),
    commonjs({
      transformMixedEsModules: true,
      include: "node_modules/**",
      exclude: "**/*.css",
    }),
    // external(),
    postcss(),
    typescript({ tsconfig: "./tsconfig.json" }),
    serve(),
    livereload(),
  ],
  // external: ["react", "react-dom", "antd"],
};
