export default function RowItemHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return <h3 className='header'>{children}</h3>;
}
