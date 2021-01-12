// from node_modules/react/index.d.ts: global -> JSX -> IntrinsicElements
type h1Props = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export default function PrimaryHeader({
	children,
	...props
}: {
	children: React.ReactNode;
} & h1Props) {
	return (
		<h1 className='my-4' {...props}>
			{children}
		</h1>
	);
}
