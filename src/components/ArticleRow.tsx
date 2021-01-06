import React, { DetailedHTMLProps } from 'react';
import imageUrl from '../lib/imageUrl';
import '../css/article.css';
import ClickableLink from './ClickableLink';

export default function ArticleRow({
	article,
}: {
	article: SGA.ArticleDocument;
}) {
	let thumbnail: React.ReactElement | null = null;
	if (article.thumbnail) {
		thumbnail = (
			<img src={imageUrl(article.thumbnail).url()} alt={article.title} />
		);
	}

	const slug = (s: string) => {
		return s.toLowerCase().replaceAll(' ', '-');
	};

	return (
		<div className='d-flex my-4'>
			<div className='article-row-thumbnail'>{thumbnail}</div>
			<div className='article-row-content'>
				<ClickableLink
					href={'/news/' + article._id + '/' + slug(article.title)}
					target='_blank'
				>
					<h3 style={{ margin: '0px' }}>{article.title}</h3>
				</ClickableLink>

				<i className='text-sm'>{article.publish_date}</i>
				<br />

				<i>{article.author ?? 'No author'}</i>
				<br />

				<p>{article.summary}</p>
			</div>
		</div>
	);
}
