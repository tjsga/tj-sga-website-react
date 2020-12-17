import React from 'react';
import Hero from '../components/Hero';

const feedbackFormURL =
	'https://docs.google.com/forms/d/e/1FAIpQLSeO8CN666WSb-jw0johyLMLb00rFz-bCtXaPeWpTSvbSqBBLw/viewform?embedded=true';

export default function FeedbackPage() {
	return (
		<>
			<Hero />
			<main className='text-center'>
				<iframe
					src={feedbackFormURL}
					style={{
						width: '640px',
						height: '900px',
						scrollbarWidth: 'none',
					}}
					title='Feedback Form'
				>
					Loading…
				</iframe>
			</main>
		</>
	);
}
