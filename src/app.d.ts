// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { DirectusClient } from '@directus/sdk';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			directus: DirectusClient;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
