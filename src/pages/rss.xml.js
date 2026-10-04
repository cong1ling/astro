import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('posts');
	const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: '帷幄的Blog',
		description: '帷幄的个人博客，分享技术、生活与灵感。',
		site: context.site,
		items: sorted.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/posts/${post.slug}/`,
			categories: post.data.tags,
		})),
		customData: `<language>zh-CN</language>`,
	});
}
