import Mission from './Mission';
import RecentNews from './RecentNews';

export default function NewsAndMission() {
	return (
		<div className='row'>
			<div className='col flex-2'>
				<RecentNews />
			</div>

			<div className='col flex-1'>
				<Mission />
			</div>
		</div>
	);
}
