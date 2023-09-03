import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default ({ mode }) => {
	process.env = { ...process.env, NODE_ENV: mode, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: '/',
		resolve: {
			alias: {
				'@/styles': path.resolve(__dirname, './src/styles/'),
				'@/types': path.resolve(__dirname, './src/types/'),
				'@/mobx': path.resolve(__dirname, './src/domain/stores/index'),
				'@/services': path.resolve(__dirname, './src/domain/services/'),
				'@/interfaces': path.resolve(__dirname, './src/domain/interfaces/'),
				'@/entities': path.resolve(__dirname, './src/domain/entities/'),
				'@/configs': path.resolve(__dirname, './src/configs/'),
				'@/utils': path.resolve(__dirname, './src/utils/'),
				'@/components': path.resolve(__dirname, './src/presentation/components/'),
				'@/layouts': path.resolve(__dirname, './src/presentation/layouts/'),
				'@/adapters': path.resolve(__dirname, './src/adapters/')
			}
		},
		plugins: [react()],
		server: {
			host: true,
			strictPort: false,
			port: 3000
		},
		define: {
			'process.env': process.env
		}
	})
}
