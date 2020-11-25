import React from 'react';
import useQuery from '../hooks/useInitiatives';
import ArticleRow from './ArticleRow';

export default function ArticleList() {
	let articles = useQuery<SGA.ArticleDocument[]>(
		'*[_type == "article"] | order(publish_date desc) [0...3]'
	);

	if (!articles) {
		return null;
	}

	console.log(articles);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{articles.map((article) => {
				return <ArticleRow key={article._id} article={article} />;
			})}
		</div>
	);
}
