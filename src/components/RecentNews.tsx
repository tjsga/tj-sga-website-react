import React from 'react';
import { Link } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import ArticleRow from './ArticleRow';
import PrimaryHeader from './PrimaryHeader';

export default function RecentNews() {
	const articles =
		useQuery<SGA.ArticleDocument[]>(
			`*[_type == 'article'] | order (publish_date desc, title) [0...3]`
		) ?? [];

	const articleList = articles.map((article) => (
		<ArticleRow article={article} key={article._id} />
	));

	return (
		<div>
			<PrimaryHeader>Recent News</PrimaryHeader>
			{articleList}
			<Link to='/news'>All News</Link>
		</div>
	);
}
