import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import imageUrl from '../lib/imageUrl';
import '../css/article.css';
import useNewsArticle from '../hooks/useNewsArticle';
import LocalLinkClickable from '../components/LocalLinkClickable';
import BlockContentWithExternalLinks from '../components/BlockContentWithExternalLinks';
import PrimaryHeader from '../components/PrimaryHeader';

export default function NewsArticle() {
	let { articleId } = useParams<{ articleId: string }>();
	let article = useNewsArticle(articleId);

	let thumbnailUrl = '/images/hero.png';
	if (article?.thumbnail) {
		thumbnailUrl = imageUrl(article.thumbnail).url();
	}

	const goToAllNewsArticles = (
		<LocalLinkClickable to='/news'>Go to all news articles</LocalLinkClickable>
	);

	return (
		<>
			<Hero heading='News' imageURL={thumbnailUrl || undefined} />
			<main>
				{article ? (
					<div style={{ maxWidth: '640px', margin: '2rem auto' }}>
						{goToAllNewsArticles}
						<PrimaryHeader>{article.title}</PrimaryHeader>
						<i>
							Posted {article.publish_date} by {article.author || 'No author'}
						</i>
						<br />
						<div id='article-content' className='article-paragraphs'>
							<BlockContentWithExternalLinks blocks={article.content} />
						</div>
						<br />
						{goToAllNewsArticles}
					</div>
				) : null}
			</main>
		</>
	);
}
