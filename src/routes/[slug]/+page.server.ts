import type { Page } from '$lib/directus-types.js';
import { error } from '@sveltejs/kit';
import { readItem } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		const page = (await directus.request(readItem('pages', params.slug))) as Page;

		return {
			page
		};
	} catch {
		throw error(404, 'Page not found');
	}
}
