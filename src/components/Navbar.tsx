import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

let pages = [
	{
		url: '/',
		title: 'Home',
	},
	{
		url: '/news',
		title: 'News',
	},
	{
		url: '/initiatives',
		title: 'Initiatives',
	},
	{
		url: '#',
		title: 'What We Do',
		items: [
			{
				url: '/mission',
				title: 'Mission and History',
			},
			{
				url:
					'https://docs.google.com/document/d/1ftcFGlGiyU4cS5zNX5KLoIm4M1TR90C7btj9nIWxp4M/edit',
				title: 'Constitution',
			},
			{
				url:
					'https://drive.google.com/open?id=0B7IEunr2_iS7MTcyMDA0NmQtOTFjYy00MWQ2LThiOTItNzg5NmJiZjgxMmIy',
				title: 'Meeting Minutes',
			},
			{
				url:
					'https://docs.google.com/spreadsheets/d/195ydC8ReqixYX989V_5FurQc5wdt_a7B29PtYzXyqJg/edit?usp=sharing',
				title: 'Finance',
			},
		],
	},
];

export function Submenu({ items }) {}

export default function Navbar() {
	return (
		<div className='nav'>
			<Link to='/'>
				<img src='/images/banner.png' alt='TJ SGA' className='nav-logo' />
			</Link>
			{pages.map((page) => {
				if ('items' in page) {
					return (
						<div className='submenu-outer'>
							<Link key={page.url} className='nav-link' to={page.url}>
								{page.title}
							</Link>
							<div className='submenu-content'>
								{/* Most of these are external so we use <a> tags instead of <Link> */}
								{page.items?.map((item) => (
									<>
										<a key={item.url} className='submenu-link' href={item.url}>
											{item.title}
										</a>
										<br />
									</>
								))}
							</div>
						</div>
					);
				} else {
					return (
						<Link key={page.url} className='nav-link' to={page.url}>
							{page.title}
						</Link>
					);
				}
			})}
		</div>
	);
}
