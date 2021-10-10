export default function PrimaryHeader({
	children,
	...props
}: {
	children: React.ReactNode;
} & JSX.IntrinsicElements['h1']) {
	return (
		<h1 className='my-4' {...props}>
			{children}
		</h1>
	);
}
