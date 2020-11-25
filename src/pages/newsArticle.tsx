import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import useQuery from '../hooks/useInitiatives';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';

export default function NewsArticle() {
	let { articleId } = useParams<{ articleId: string }>();
	let article = useQuery<SGA.ArticleDocument>('*[_id == $articleId] [0]', {
		articleId,
	});
	if (!article) {
		return null;
	}

	let thumbUrl: string | undefined = undefined;
	if (article.thumbnail) {
		thumbUrl = imageUrl(article.thumbnail).url() || undefined;
	}

	console.log(article);

	return (
		<>
			<Hero heading={article.title} imageURL={thumbUrl} />
			<div style={{ maxWidth: '640px' }} className='mx-auto my-8'>
				<i className='text-sm'>Published: {article.publish_date}</i>
				<br />
				<Link to='/news'>Go to all news articles</Link>
				<br />
				<BlockContent blocks={article.content}></BlockContent>
				<br />
			</div>
		</>
	);
}
