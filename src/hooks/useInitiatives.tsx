import React from 'react'
import sanity from '../sanity';

export default function useQuery<T>(query: string, params?: any) {
	let [result, setResult] = React.useState<T>();

  React.useEffect(() => {
    sanity.fetch(query, params).then(setResult);
	}, [])
	
	return result;
}