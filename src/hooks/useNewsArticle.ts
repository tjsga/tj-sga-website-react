import { useEffect, useState } from 'react';
import sanity from '../sanity';

export default function useNewsArticle(articleId: string) {
	let [article, setArticle] = useState<SGA.ArticleDocument>(null!);

	useEffect(() => {
		sanity.fetch('*[_id == $articleId] [0]', { articleId }).then(setArticle);
	}, [articleId]);

	return article;
}
