export default function FlexRowSection({
	children,
	flex,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingBottom,
	paddingX,
	paddingY,
}: {
	children: React.ReactNode;
	flex: number;
	paddingLeft?: string;
	paddingRight?: string;
	paddingTop?: string;
	paddingBottom?: string;
	paddingX?: string;
	paddingY?: string;
}) {
	if (paddingX != null) {
		paddingLeft = paddingRight = paddingX;
	}
	if (paddingY != null) {
		paddingTop = paddingBottom = paddingY;
	}
	return (
		<div style={{ flex, paddingLeft, paddingRight, paddingTop, paddingBottom }}>
			{children}
		</div>
	);
}
