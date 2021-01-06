import React from 'react';
import sanity from '../sanity';
import { SanityDocument } from '@sanity/client/sanityClient';

function useMission() {
	let [mission, setMission] = React.useState<
		SanityDocument<SGA.MissionDocument> | undefined
	>();

	React.useEffect(() => {
		sanity.getDocument<SGA.MissionDocument>('mission').then(setMission);
	}, []);

	return mission;
}

export default useMission;
