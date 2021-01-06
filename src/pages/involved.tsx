import { SanityDocument } from '@sanity/client';
import React from 'react';
import BlueButtonLink from '../components/BlueButtonLink';
import Hero from '../components/Hero';
import ParagraphHeader from '../components/ParagraphHeader';
import ParagraphWithHeader from '../components/ParagraphWithHeader';
import StrongParagraph from '../components/StrongParagraph';
import sanity from '../sanity';

export default function GetInvolved() {
	let [getInvolved, setGetInvolved] = React.useState<
		SanityDocument<SGA.GetInvolvedDocument> | undefined
	>();

	React.useEffect(() => {
		sanity
			.getDocument<SGA.GetInvolvedDocument>('get_involved')
			.then(setGetInvolved);
	}, []);

	return (
		<>
			<Hero heading='Get Involved' />
			<main className='text-center'>
				<ParagraphHeader>SGA Calendar</ParagraphHeader>

				<iframe
					src='https://calendar.google.com/calendar/u/0/embed?src=mbftfg4hu7i8ueqrgcb5o7hc6k@group.calendar.google.com&ctz=America/New_York'
					title='SGA Calendar'
					width='800'
					height='600'
				/>

				<br />

				<StrongParagraph>
					Interested in getting involved with SGA? You can run for office, work
					on a project, or apply to a committee. If you just want to share an
					idea or concern or get to know your representatives, reach out to us
					at <b>sga@tjhsst.edu</b>!
				</StrongParagraph>

				<ParagraphHeader>
					Here are some ways to connect with SGA:
				</ParagraphHeader>

				{getInvolved
					? getInvolved.ways.map((way) => (
							<ParagraphWithHeader
								title={way.title}
								body={way.text}
								key={way._id}
							/>
					  ))
					: null}

				<BlueButtonLink href='/feedback'>Give Feedback</BlueButtonLink>
			</main>
		</>
	);
}
