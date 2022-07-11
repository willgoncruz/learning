import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    serve(),
    livereload(),
  ],
};

// import { terser } from 'rollup-plugin-terser';
// import postcss from 'rollup-plugin-postcss';

// const packageJson = require('./package.json');

// export default {
//     input: 'src/index.ts',
//     output: [
//         {
//             file: packageJson.main,
//             format: 'cjs',
//             sourcemap: true,
//             name: 'react-lib'
//         },
//         {
//             file: packageJson.module,
//             format: 'esm',
//             sourcemap: true
//         }
//     ],
//     plugins: [
//         external(),
//         resolve(),
//         commonjs(),
//         typescript({ tsconfig: './tsconfig.json' }),
//         postcss(),
//         terser()
//     ]
// }
