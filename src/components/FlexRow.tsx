export default function FlexRow({
	paddingLeft,
	paddingRight,
	marginTop,
	marginBottom,
	children,
}: {
	paddingLeft?: string;
	paddingRight?: string;
	marginTop?: string;
	marginBottom?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				paddingLeft,
				paddingRight,
				marginTop,
				marginBottom,
			}}
		>
			{children}
		</div>
	);
}
