import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export const prerender = true;

const directus = getDirectusInstance(fetch);

export async function GET() {
	const site = 'https://blog.erkut.dev';

	const pages = await directus.request(
		readItems('posts', {
			fields: ['slug'],
			sort: ['-date_created'],
			filter: {
				status: { _eq: 'published' }
			}
		})
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${site}/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    ${pages
			.map(
				(page) => `<url>
        <loc>${site}/${page.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`
			)
			.join('\n')}
    </urlset>
  `;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
