export default function StrongParagraph({
	children,
}: {
	children: React.ReactNode;
}) {
	return <p className='strong-paragraph'>{children}</p>;
}
