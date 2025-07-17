import { error } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';

export async function load({ params: { slug }, locals: { directus } }) {
	const [post] = await directus.request(
		readItems('posts', {
			filter: { slug: { _eq: slug } },
			fields: ['*'],
			limit: 1
		})
	);

	if (!post) throw error(404, 'Post not found.');

	return { post };
}
