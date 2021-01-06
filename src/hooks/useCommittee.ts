import useQuery from './useQuery';

export default function useCommittee(committee: string) {
	return useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == $committee]`,
		{ committee }
	);
}
