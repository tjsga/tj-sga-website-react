export default function SegmentHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h3
			style={{
				margin: '1em 0px',
				fontSize: '1.75rem',
				fontWeight: 500,
			}}
		>
			{children}
		</h3>
	);
}
