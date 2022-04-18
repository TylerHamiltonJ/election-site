import { createWebHistory, createRouter } from 'vue-router'

export default createRouter({
	routes: [
		{
			name: 'home',
			path: '/',
			component: () => import('./pages/home.vue')
		}
	],
	history: createWebHistory()
})