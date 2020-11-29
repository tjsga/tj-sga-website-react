import { SanityDocument } from '@sanity/client';
import React from 'react';
import GetInvolvedRow from '../components/GetInvolvedRow';
import Hero from '../components/Hero';
import '../css/get-involved.css';
import sanity from '../sanity';

export default function GetInvolved() {
	let [ways, setWays] = React.useState<
		SanityDocument<SGA.GetInvolvedDocument> | undefined
	>();

	React.useEffect(() => {
		sanity.getDocument<SGA.GetInvolvedDocument>('get_involved').then(setWays);
	}, []);

	return (
		<>
			<Hero heading='Get Involved' />
			<h3>SGA Calendar</h3>
			<iframe
				src='https://calendar.google.com/calendar/u/0/embed?src=mbftfg4hu7i8ueqrgcb5o7hc6k@group.calendar.google.com&ctz=America/New_York'
				title='SGA Calendar'
				width='800'
				height='600'
			/>
			<hr />
			{ways ? (
				<>
					<h3>Here are some ways to connect with SGA:</h3>
					{ways.ways.map((way) => (
						<GetInvolvedRow way={way} key={way._id} />
					))}
				</>
			) : null}
		</>
	);
}
