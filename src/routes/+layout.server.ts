import type { Project } from '$lib/directus-types.js';
import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	// @ts-expect-error: Directus Singleton types are not fully compatible with TypeScript
	const project = (await directus.request(readItems('global'))) as Project;

	return {
		project
	};
}
