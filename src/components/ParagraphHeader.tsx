export default function ParagraphHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>{children}</h2>
	);
}
