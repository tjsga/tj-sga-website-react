import React from 'react';
import ArticleRow from './ArticleRow';
import sanity from '../sanity';

export default function ArticleList() {
	let [articles, setArticles] = React.useState<SGA.ArticleDocument[]>([]);
	let [reachedEnd, setReachedEnd] = React.useState<boolean>(false);

	// Fetch the next three articles
	const addArticles = async (last_date: string, last_title: string) => {
		const query = `*[_type == "article" && (
				publish_date < $last_date ||
				(
					publish_date == $last_date && 
					title > $last_title
				)
			)] | order(publish_date desc, title) [0...3]`;

		const params = {
			last_date,
			last_title,
		};

		let articles = await sanity.fetch<SGA.ArticleDocument[]>(query, params);

		console.log(articles.length);

		if (articles.length < 3) {
			setReachedEnd(true);
		}

		// Add the next articles
		setArticles((oldArticles) => oldArticles.concat(articles));
	};

	React.useEffect(() => {
		addArticles('3000-01-01', '');
	}, []);

	if (!articles) {
		return null;
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{articles.map((article) => {
				return <ArticleRow key={article._id} article={article} />;
			})}

			{!reachedEnd ? (
				<button
					onClick={() => {
						let lastArticle = articles[articles.length - 1];
						addArticles(lastArticle.publish_date, lastArticle.title);
					}}
				>
					Load more articles
				</button>
			) : (
				<div>No more articles to show</div>
			)}
		</div>
	);
}
