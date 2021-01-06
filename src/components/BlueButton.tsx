import { MouseEventHandler } from 'react';

export default function BlueButton({
	onClick,
	children,
}: {
	onClick?: MouseEventHandler;
	children: React.ReactNode;
}) {
	return (
		<button onClick={onClick} className='blue-button'>
			{children}
		</button>
	);
}
