import { posts } from '$lib/assets/blog.js';
import { calculators } from '$lib/assets/calculators/calculators';
import { website } from '$lib/assets/seo.js';

export async function GET({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});

	const blogMap = posts
		.map(
			(post) => `
            <url>
            <loc>${website.baseUrl}/blog/${post.slug}</loc>
            </url>`
		)
		.join('');

	const calculatorsMap = calculators
		.map(
			(calculator) => `
        <url>
            <loc>${website.baseUrl}/${calculator?.id}</loc>
        </url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${website.baseUrl}/kontakt</loc>
        </url>
        <url>
            <loc>${website.baseUrl}/blog</loc>
        </url>

        ${blogMap}
        ${calculatorsMap}
        </urlset>`;
	return new Response(sitemap);
}
