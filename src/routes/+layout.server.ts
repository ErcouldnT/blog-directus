import { readSingleton } from '@directus/sdk';
import { directusUrl } from '$lib/directus';

export async function load({ locals }) {
	const project = await locals.directus.request(readSingleton('project'));

	return {
		project,
		directusUrl
	};
}
