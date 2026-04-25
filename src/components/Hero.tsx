import '../css/hero.css';

export default function Hero({
	imageURL = '/images/hero.jpg',
	heading = 'TJHSST SGA',
}: {
	imageURL?: string;
	heading?: string;
}) {
	return (
		<div className='hero' style={{ backgroundImage: `url(${imageURL})` }}>
			<span className='hero-heading'>{heading}</span>
		</div>
	);
}
