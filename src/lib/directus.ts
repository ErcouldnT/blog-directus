import type { LoadEvent } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { createDirectus, rest } from '@directus/sdk';
// import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';

function getDirectusInstance(fetch?: LoadEvent['fetch']) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_API_URL, options).with(rest());
	return directus;
}

export default getDirectusInstance;
