import React from 'react'
import sanity from '../sanity';
import { SanityDocument } from '@sanity/client/sanityClient';

interface MissionDocument {
	mission: string
	vision: string
	quote_text: string
	quote_author: string
}

function useMission() {
	let [mission, setMission] = React.useState<SanityDocument<MissionDocument> | undefined>();

	React.useEffect(() => {
		sanity.getDocument<MissionDocument>('mission').then(setMission)
	}, [])

	return mission;
}

export default useMission;