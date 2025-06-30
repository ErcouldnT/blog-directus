import type { Project, Post } from '$lib/directus-types.js';
import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	// @ts-expect-error: Directus Singleton types are not fully compatible with TypeScript
	const project = (await directus.request(readItems('global'))) as Project;

	const posts = (await directus.request(
		readItems('posts', {
			fields: ['slug', 'title', 'date_created', { author: ['first_name', 'last_name'] }],
			sort: ['-date_created'],
			filter: {
				status: { _eq: 'published' }
			}
		})
	)) as Post[];

	return {
		project,
		posts
	};
}
