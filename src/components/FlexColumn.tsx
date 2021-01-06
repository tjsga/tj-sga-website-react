export default function FlexColumn({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
	);
}
