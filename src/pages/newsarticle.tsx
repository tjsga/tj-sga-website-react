import React from 'react';
import { useParams } from 'react-router-dom';
import BlockContentWithExternalLinks from '../components/BlockContentWithExternalLinks';
import ClickableLink from '../components/ClickableLink';
import Hero from '../components/Hero';
import PrimaryHeader from '../components/PrimaryHeader';
import '../css/article.css';
import useNewsArticle from '../hooks/useNewsArticle';
import imageUrl from '../lib/imageUrl';

export default function NewsArticle() {
	let { articleId } = useParams<{ articleId: string }>();
	let article = useNewsArticle(articleId || '');

	let thumbnailUrl = '/images/hero.png';
	if (article?.thumbnail) {
		thumbnailUrl = imageUrl(article.thumbnail).url()!;
	}

	const goToAllNewsArticles = (
		<ClickableLink href='/news'>Go to all news articles</ClickableLink>
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
						<div className='article-paragraphs'>
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
