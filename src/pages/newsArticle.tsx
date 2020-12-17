import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../sanity';
import '../css/article.css';

export default function NewsArticle() {
	let { articleId } = useParams<{ articleId: string }>();
	let [article, setArticle] = React.useState<SGA.ArticleDocument>(null!);

	React.useEffect(() => {
		sanity.fetch('*[_id == $articleId] [0]', { articleId }).then(setArticle);
	}, [articleId]);

	let thumbUrl: string;
	if (article?.thumbnail) {
		thumbUrl = imageUrl(article.thumbnail).url();
	} else {
		thumbUrl = '/images/hero.png';
	}

	return (
		<>
			<Hero heading='News' imageURL={thumbUrl || undefined} />
			<main>
				{article ? (
					<div style={{ maxWidth: '640px', margin: '2rem auto' }}>
						<Link to='/news' className='clickable-link'>
							Go to all news articles
						</Link>
						<h1>{article.title}</h1>
						<i>
							Posted {article.publish_date} by {article.author || 'No author'}
						</i>
						<br />
						{/* Wrap the BlockContent in a div because it expands to <></> */}
						<div
							id='article-content'
							className='article-paragraphs'
							ref={(ref) => {
								/*
								When this element loads, convert all the links to have target="_blank."
								This ensures that the links open in a new tab
								*/
								if (ref) {
									ref.querySelectorAll('a').forEach((link) => {
										link.target = '_blank';
									});
								}
							}}
						>
							<BlockContent blocks={article.content} />
						</div>
						<br />
						<Link to='/news' className='clickable-link'>
							Go to all news articles
						</Link>
					</div>
				) : null}
			</main>
		</>
	);
}
