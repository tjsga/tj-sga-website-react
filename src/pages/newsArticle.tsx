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

	let thumbUrl: string | null = null;
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
						<div className='article-paragraphs'>
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
