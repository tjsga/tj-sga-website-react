import '../css/hero.css';

type HeroProps = {
	imageURL?: string;
	heading?: string;
};

export default function Hero({
	imageURL = '/images/hero.png',
	heading = 'TJHSST SGA',
}: HeroProps) {
	return (
		<div className='hero'>
			<span className='hero-heading'>{heading}</span>
			<img
				src={imageURL}
				alt='Background'
				style={{
					width: '100vw',
					height: '60vh',
					objectFit: 'cover',
				}}
			/>
		</div>
	);
}
