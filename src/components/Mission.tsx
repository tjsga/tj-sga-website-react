import '../css/mission.css';
import useMission from '../hooks/useMission';

export default function Mission() {
	let mission = useMission();
	if (!mission) {
		return null;
	}

	return (
		<section className='text-center'>
			<div className='mission-box'>
				<h3 className='header text-center'>Mission</h3>
				<p>{mission.mission}</p>
				<h3 className='header text-center'>Vision</h3>
				<p>{mission.vision}</p>
				<blockquote>{mission.quote_text}</blockquote>
			</div>
		</section>
	);
}
