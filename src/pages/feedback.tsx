import React from 'react';
import Hero from '../components/Hero';
import { SGA_FEEDBACK_FORM_URL } from '../lib/constants';

export default function FeedbackPage() {
	return (
		<>
			<Hero heading='Feedback' />
			<main className='text-center'>
				<iframe
					src={SGA_FEEDBACK_FORM_URL}
					style={{
						width: '100%',
						maxWidth: '800px',
						height: '1000px',
						border: 'none',
					}}
					title='Feedback Form'
				>
					Loading…
				</iframe>
			</main>
		</>
	);
}