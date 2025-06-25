import type { Post } from '$lib/directus-types.js';
import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	const posts = (await directus.request(
		readItems('posts', {
			fields: ['slug', 'title', 'publish_date', { author: ['name'] }],
			sort: ['-publish_date']
		})
	)) as Post[];

	return {
		posts
	};
}
