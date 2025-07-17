import { readSingleton, readItems } from '@directus/sdk';
import { directusUrl } from '$lib/directus';

export async function load({ locals }) {
	const project = await locals.directus.request(readSingleton('project'));

	const posts = await locals.directus.request(
		readItems('posts', {
			fields: [
				'slug',
				'title',
				'date_created',
				'description',
				{ author: ['first_name', 'last_name'] }
			],
			sort: ['-date_created'],
			filter: {
				status: { _eq: 'published' }
			}
		})
	);

	return {
		project,
		posts,
		directusUrl
	};
}
