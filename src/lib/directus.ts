import type { LoadEvent } from '@sveltejs/kit';
import type { ApiCollections } from './directus-types';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import { createDirectus, rest } from '@directus/sdk';
// import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';

function getDirectusInstance(fetch?: LoadEvent['fetch']) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus<ApiCollections>(PUBLIC_DIRECTUS_URL, options).with(rest());
	return directus;
}

export const directusUrl = PUBLIC_DIRECTUS_URL;

export default getDirectusInstance;
