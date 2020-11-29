import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import useQuery from '../hooks/useQuery';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import '../css/article.css';

export default function NewsArticle() {
	let { articleId } = useParams<{ articleId: string }>();
	let article = useQuery<SGA.ArticleDocument>('*[_id == $articleId] [0]', {
		articleId,
	});

	let thumbUrl: string | undefined = undefined;
	if (article?.thumbnail) {
		thumbUrl = imageUrl(article.thumbnail).url() || undefined;
	} else {
		thumbUrl = '/images/hero.png';
	}

	return (
		<>
			<Hero heading='News' imageURL={thumbUrl} />
			<Link to='/news' className='clickable-link'>
				Go to all news articles
			</Link>
			<br />
			{article ? (
				<div style={{ maxWidth: '640px', margin: '2rem auto' }}>
					<h1>{article.title}</h1>
					<i className='text-sm'>{article.publish_date}</i>
					<br />
					<i>{article.author || 'No author'}</i>
					<br />
					{/* Wrap the BlockContent in a div because it expands to <></> */}
					<div className='article-paragraphs'>
						<BlockContent blocks={article.content} />
					</div>
					<br />
					<Link to='/news' className='clickable-link'>
						Go to all news articles
					</Link>
				</div>
			) : null}
		</>
	);
}
