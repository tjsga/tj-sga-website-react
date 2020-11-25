import React from 'react'
import useMission from '../hooks/useMission';

export default function Mission() {
	let mission = useMission();
	if (!mission) {
		return null;
	}

	return <section className="text-center bg-secondary text-light">
		<div className="container mx-auto px-8 py-8">
			<h3 className="text-center font-bold text-3xl text-secondary mb-6">
				Mission
			</h3>
			<p>
				{ mission.mission }
			</p>
			<h3 className="text-center font-bold text-3xl text-secondary mb-6">
				Vision
			</h3>
			<p>
				{ mission.vision }
			</p>
			<blockquote>
				{ mission.quote_text }
			</blockquote>
		</div>
	</section>
}