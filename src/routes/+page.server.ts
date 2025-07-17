import { error } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';

export async function load({ locals }) {
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

	if (!posts.length) throw error(404, 'Posts not found.');

	return { posts };
}
