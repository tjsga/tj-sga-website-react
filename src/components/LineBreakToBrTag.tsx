export default function LinebreakToBrTag({ text }: { text: string }) {
	// Must be wrapped in fragment to process react nodes correctly
	return (
		<>
			{text.split('\n').map((line) => (
				<>
					{line}
					<br />
				</>
			))}
		</>
	);
}
