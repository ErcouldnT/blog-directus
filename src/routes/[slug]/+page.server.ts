import { error } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';

export async function load({ params, locals }) {
	const { slug } = params;

	const [post] = await locals.directus.request(
		readItems('posts', {
			filter: { slug: { _eq: slug } },
			fields: ['*'],
			limit: 1
		})
	);

	if (!post) error(404, 'Post not found.');
	return { post };
}
