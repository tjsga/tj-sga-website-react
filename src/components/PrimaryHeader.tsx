export default function PrimaryHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return <h1 className='my-4'>{children}</h1>;
}
