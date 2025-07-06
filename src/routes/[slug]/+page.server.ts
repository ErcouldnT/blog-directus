import { error } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';

export async function load({ params, locals }) {
	const { slug } = params;

	try {
		const [post] = await locals.directus.request(
			readItems('posts', {
				filter: { slug: { _eq: slug } },
				fields: ['*'],
				limit: 1
			})
		);

		// if (!post) throw new Error('Not found');
		return { post };
	} catch {
		error(404, 'Post not found');
	}
}
