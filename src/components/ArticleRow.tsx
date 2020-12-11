import React from 'react';
import imageUrl from '../imageUrl';
import { Link } from 'react-router-dom';
import '../css/article.css';

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
		<div className='row'>
			<div className='article-row-thumbnail'>
				{thumbUrl ? (
					<img className='mb-4' src={thumbUrl} alt={article.title} />
				) : null}
			</div>
			<div className='article-row-content'>
				<Link
					to={'/news/' + article._id + '/' + slug(article.title)}
					className='clickable-link'
				>
					<h3 style={{ margin: '0px' }}>{article.title}</h3>
				</Link>
				<i className='text-sm'>{article.publish_date}</i>
				<br />
				<i>{article.author || 'No author'}</i>
				<br />
				<p style={{ marginBottom: '0px' }}>{article.summary}</p>
			</div>
		</div>
	);
}
