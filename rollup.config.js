import babel from '@rollup/plugin-babel'
import commonJS from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser";

export default {
	input: './src/index.js',
	output: {
		format: 'iife',
		file: 'public/marble.js',
		name: 'Marble'
	},
	plugins: [
		babel(), 
		resolve(), 
		commonJS({
			include: 'node_modules/**'
		}),
		terser()
	],
}
