import React from 'react';
import ArticleRow from './ArticleRow';
import sanity from '../sanity';
import '../css/article.css';
import BlueButton from './BlueButton';
import Centered from './Centered';

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

	let bottomComponent: any;
	if (reachedEnd) {
		bottomComponent = <div>No more articles to show</div>;
	} else {
		bottomComponent = (
			<BlueButton
				onClick={() => {
					let { publish_date, title } = articles[articles.length - 1];
					addArticles(publish_date, title);
				}}
			>
				Load more articles
			</BlueButton>
		);
	}

	const articleList = articles.map((article) => (
		<ArticleRow key={article._id} article={article} />
	));

	return (
		<div>
			{articleList}
			<Centered>{bottomComponent}</Centered>
		</div>
	);
}
