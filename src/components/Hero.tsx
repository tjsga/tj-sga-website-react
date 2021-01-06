import '../css/hero.css';

export default function Hero({
	imageURL = '/images/hero.jpg',
	heading = 'TJHSST SGA',
}: {
	imageURL?: string;
	heading?: string;
}) {
	return (
		<div className='hero'>
			<span className='hero-heading'>{heading}</span>
			<img
				src={imageURL}
				alt='Background'
				style={{
					width: '100vw',
					maxHeight: '60vh',
					objectFit: 'contain',
				}}
			/>
		</div>
	);
}
