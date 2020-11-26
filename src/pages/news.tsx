import React from 'react';
import ArticleList from '../components/ArticleList';
import Hero from '../components/Hero';

export default function News() {
	return (
		<>
			<Hero heading='News' />
			<ArticleList />
		</>
	);
}
