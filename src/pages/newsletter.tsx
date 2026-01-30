import Centered from '../components/Centered';
import Hero from '../components/Hero';
import PrimaryHeader from '../components/PrimaryHeader';
import { SGA_NEWSLETTER_EMBED_URL } from '../lib/constants';

export default function Newsletter() {
	return (
		<>
			<Hero heading='Newsletter' />
			<main>
				<Centered>
					<PrimaryHeader>SGA Newsletter!</PrimaryHeader>
					<iframe
						title='SGA Newsletter'
						src={SGA_NEWSLETTER_EMBED_URL}
						width='800'
						height='600'
					/>
				</Centered>
			</main>
		</>
	);
}
