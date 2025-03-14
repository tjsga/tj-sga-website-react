import React from 'react';
import '../css/article.css';
import imageUrl from '../lib/imageUrl';
import ClickableLink from './ClickableLink';
import FlexRow from './FlexRow';
import FlexRowSection from './FlexRowSection';

export default function ArticleRow({
	article,
}: {
	article: SGA.ArticleDocument;
}) {
	let thumbnail: React.ReactElement | null = null;
	if (article.thumbnail) {
		thumbnail = (
			<img
				src={imageUrl(article.thumbnail).url() ?? undefined}
				alt={article.title}
			/>
		);
	}

	const slug = (s: string) => s.toLowerCase().replace(/ /g, '-');
	const articleUrl = '/news/' + article._id;// + '/' + slug(article.title);

	return (
		<FlexRow marginTop='4em' marginBottom='4em'>
			<FlexRowSection flex={1} paddingY='0.5em' paddingRight='1em'>
				{thumbnail}
			</FlexRowSection>
			<FlexRowSection flex={3} paddingY='0.5em' paddingRight='1em'>
				<ClickableLink href={articleUrl} target='_blank'>
					<h3 style={{ margin: '0px' }}>{article.title}</h3>
				</ClickableLink>

				<i className='text-sm'>{article.publish_date}</i>
				<br />

				<i>{article.author ?? 'No author'}</i>
				<br />

				<p>{article.summary}</p>
			</FlexRowSection>
		</FlexRow>
	);
}
