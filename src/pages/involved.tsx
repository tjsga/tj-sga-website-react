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
			<main className='text-center'>
				<h2 className='my-2'>SGA Calendar</h2>
				<iframe
					src='https://calendar.google.com/calendar/u/0/embed?src=mbftfg4hu7i8ueqrgcb5o7hc6k@group.calendar.google.com&ctz=America/New_York'
					title='SGA Calendar'
					width='800'
					height='600'
				/>
				<p className='get-involved-body'>
					Interested in getting involved with SGA? You can run for office, work
					on a project, or apply to a committee. If you just want to share an
					idea or concern or get to know your representatives, reach out to us
					at <b>sga@tjhsst.edu</b>!
				</p>
				{ways ? (
					<>
						<h2>Here are some ways to connect with SGA:</h2>
						{ways.ways.map((way) => (
							<GetInvolvedRow way={way} key={way._id} />
						))}
					</>
				) : null}
				<a
					className='blue-button'
					href='https://goo.gl/forms/F3FXer4xpAF5SDhL2'
				>
					Contact Us
				</a>
			</main>
		</>
	);
}
