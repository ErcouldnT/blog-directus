// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { RestClient } from '@directus/sdk';
import type { ApiCollections } from '$lib/directus-types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			directus: RestClient<ApiCollections>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
