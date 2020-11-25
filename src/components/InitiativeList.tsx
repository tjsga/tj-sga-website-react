import React from 'react'
import useQuery from '../hooks/useInitiatives';
import InitiativeColumn from './InitiativeColumn';

export default function InitiativeList() {
	let initiatives = useQuery<SGA.InitiativeDocument[]>('*[_type == "initiative"]');
	
	if (!initiatives) {
		return null;
	}

	return <section className="container mx-auto px-8 my-8 flex flex-wrap">
		{ initiatives.map(initiative => {
			return <InitiativeColumn key={initiative._id} {...initiative} />
		}) }
	</section>
}