import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import '../css/footer.css';
import useFooter from '../hooks/useFooter';
import Centered from './Centered';

export default function Footer() {
	let footer = useFooter();
	if (!footer) {
		return null;
	}

	return (
		<section className='footer-wrapper'>
			<img
				className='footer-banner'
				src='/images/footer-banner.jpg'
				alt='Footer Banner'
			/>
			<div className='footer-container'>
				{footer.columns.map((col, index) => (
					<div className='footer-col' key={index}>
						<BlockContent blocks={col.content} />
						{index === 2 ? (
							<Centered>
								<img src='/images/banner.png' alt='TJHSST' height='80px'></img>
							</Centered>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
