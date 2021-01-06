import BlockContent from '@sanity/block-content-to-react';

export default function BlockContentWithExternalLinks({
	blocks,
}: {
	blocks: any[];
}) {
	return (
		<div
			ref={(ref) => {
				// When this element loads, convert all the links to have target="_blank."
				// This ensures that the links open in a new tab
				if (ref) {
					ref.querySelectorAll('a').forEach((link) => {
						link.target = '_blank';
					});
				}
			}}
		>
			<BlockContent blocks={blocks} projectId='yi263kzm' dataset='production' />
		</div>
	);
}
