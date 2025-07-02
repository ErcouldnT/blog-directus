import getDirectusInstance from '$lib/directus';

export const handle = async ({ event, resolve }) => {
	event.locals.directus = getDirectusInstance(event.fetch);
	return await resolve(event, {
		filterSerializedResponseHeaders: (key) => {
			return key.toLowerCase() === 'content-type';
		}
	});
};
