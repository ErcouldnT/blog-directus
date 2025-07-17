import { error, redirect } from '@sveltejs/kit';
import { readItem } from '@directus/sdk';

export const load = async ({ params: { id }, locals: { directus } }) => {
	const post = await directus.request(readItem('posts', id, { fields: ['slug'] }));

	if (!post?.slug) {
		throw error(404, 'Post not found.');
	}

	throw redirect(308, `/${post.slug}`);
};
