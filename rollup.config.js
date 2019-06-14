// rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import flow from 'rollup-plugin-flow'

export default [{
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: [
    'axios',
  ],
  plugins: [
    copy({
      targets: {
      },
    }),
    flow(),
    resolve({
      mainFields: ['module', 'main'],
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
  ],
}]
