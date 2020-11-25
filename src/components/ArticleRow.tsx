import React from 'react';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom';

export default function ArticleRow({
	article,
}: {
	article: SGA.ArticleDocument;
}) {
	let thumbUrl: string | null = null;
	if (article.thumbnail) {
		thumbUrl = imageUrl(article.thumbnail).url();
	}

	const slug = (s: string) => {
		return s.toLowerCase().replaceAll(' ', '-');
	};

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: 1, padding: '10px' }}>
				{thumbUrl ? (
					<img className='mb-4' src={thumbUrl} alt={article.title} />
				) : null}
			</div>
			<div style={{ flex: 3, padding: '10px' }}>
				<Link to={'/news/' + article._id + '/' + slug(article.title)}>
					<h3 className='font-bold text-3xl mb-6'>{article.title}</h3>
				</Link>
				<i className='text-sm'>{article.publish_date}</i>
				<br />
				<BlockContent blocks={article.content} />
			</div>
		</div>
	);
}
