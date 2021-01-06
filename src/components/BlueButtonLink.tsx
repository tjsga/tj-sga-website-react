import { Link } from 'react-router-dom';

export default function BlueButtonLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	if (!href.startsWith('http')) {
		return (
			<Link to={href} className='blue-button'>
				{children}
			</Link>
		);
	} else {
		return (
			<a href={href} className='blue-button'>
				{children}
			</a>
		);
	}
}
