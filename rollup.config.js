import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs-alternate";
import typescript from "@rollup/plugin-typescript";
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
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    postcss(),
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
