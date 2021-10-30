import { defineNuxtPlugin } from '#app'
import urql, {
	cacheExchange,
	createClient,
	dedupExchange,
	fetchExchange,
	provideClient,
	ssrExchange,
} from '@urql/vue'

export default defineNuxtPlugin((nuxtApp) => {
	const ssr = ssrExchange({
		isClient: process.client,
		initialState: process.client ? nuxtApp.payload['$urql'] : undefined,
	})

	if (process.server) {
		nuxtApp.hooks.hook('app:rendered', () => {
			// Is this the most appropriate hook?
			nuxtApp.payload['$urql'] = ssr.extractData() // This will be available in window.__NUXT__.$urql. But there is also an empty window.__NUXT__.data and window.__NUXT__.state. What are those properties for / should you store custom data in there?
		})
	}

	const client = createClient({
		url: 'https://rickandmortyapi.com/graphql',
		exchanges: [
			dedupExchange,
			cacheExchange,
			ssr, // Add `ssr` in front of the `fetchExchange`
			fetchExchange,
		],
	})

	//nuxtApp.app.provide('$urql', client)
})
