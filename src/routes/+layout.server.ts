import { readSingleton } from '@directus/sdk';
import { directusUrl } from '$lib/directus';

export async function load({ locals: { directus } }) {
	const project = await directus.request(readSingleton('project'));

	return {
		project,
		directusUrl
	};
}
