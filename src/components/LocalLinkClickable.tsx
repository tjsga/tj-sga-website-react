import { Link } from 'react-router-dom';

export default function LocalLinkClickable({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) {
	return (
		<Link to={to} className='clickable-link'>
			{children}
		</Link>
	);
}
