import { Link } from 'react-router-dom';

export default function ClickableLink({
	href,
	children,
	target,
}: {
	href: string;
	children: React.ReactNode;
	target?: string;
}) {
	if (href.startsWith('http')) {
		return (
			<a href={href} className='clickable-link' target={target}>
				{children}
			</a>
		);
	} else {
		return (
			<Link to={href} className='clickable-link'>
				{children}
			</Link>
		);
	}
}
