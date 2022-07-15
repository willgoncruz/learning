import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs-alternate";
import typescript from "@rollup/plugin-typescript";
import hotcss from "rollup-plugin-hot-css";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
// import { terser } from 'rollup-plugin-terser';

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    // postcss(),
    hotcss({
      hot: process.env.NODE_ENV === "development",
      file: "styles.css",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs({
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      },
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    // serve(),
    // livereload(),
  ],
};
