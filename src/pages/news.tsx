import React, { useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import Hero from '../components/Hero';
import '../css/RecentNews.css';

export default function News() {
	useEffect(() => {
		// Load Instagram embed script
		const script = document.createElement('script');
		script.src = '//www.instagram.com/embed.js';
		script.async = true;
		script.onload = () => {
			// Process Instagram embeds after script loads
			if ((window as any).instgrm) {
				(window as any).instgrm.Embeds.process();
			}
		};
		document.body.appendChild(script);

		return () => {
			// Cleanup script when component unmounts
			if (document.body.contains(script)) {
				document.body.removeChild(script);
			}
		};
	}, []);

	return (
		<>
			<Hero heading='News' />
			<main>
				<div style={{ paddingTop: '1em' }}>
					<ArticleList />
				</div>

				{/* Instagram Embeds */}
				<div style={{ marginTop: '2em' }}>
					<div className="instagram-container">
						<blockquote 
							className="instagram-media" 
							data-instgrm-permalink="https://www.instagram.com/tj.sga/?utm_source=ig_embed&amp;utm_campaign=loading"
							data-instgrm-version="14"
							style={{
								background: '#FFF',
								border: '0',
								borderRadius: '3px',
								boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
								margin: '1px',
								maxWidth: '700px',
								minWidth: '500px',
								padding: '0',
								width: 'calc(100% - 2px)'
							}}
						>
						</blockquote>
						<blockquote 
							className="instagram-media" 
							data-instgrm-permalink="https://www.instagram.com/everythingtjhsst/?utm_source=ig_embed&amp;utm_campaign=loading"
							data-instgrm-version="14"
							style={{
								background: '#FFF',
								border: '0',
								borderRadius: '3px',
								boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
								margin: '1px',
								maxWidth: '700px',
								minWidth: '500px',
								padding: '0',
								width: 'calc(100% - 2px)'
							}}
						>
						</blockquote>
					</div>
				</div>
			</main>
		</>
	);
}
