import useQuery from '../hooks/useQuery';
import ArticleRow from './ArticleRow';

export default function RecentNews() {
	let news = useQuery<SGA.ArticleDocument[]>(
		`*[_type == 'article'] | order (publish_date desc, title) [0...3]`
	);

	if (!news) {
		return null;
	}

	return (
		<div>
			<h3 className='header'>Recent News</h3>
			{news.map((article) => {
				return <ArticleRow article={article} />;
			})}
		</div>
	);
}
