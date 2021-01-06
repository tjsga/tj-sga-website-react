export default function sortCommittee(
	members: SGA.MemberDocument[],
	roleOrder: string[]
) {
	const roleIndexes = {};
	for (const { _id, role } of members) {
		roleIndexes[_id] = roleOrder.findIndex((role_) => role_ === role);
	}

	return members.sort((a, b) => {
		let roleDifference = roleIndexes[a._id] - roleIndexes[b._id];
		if (roleDifference !== 0) {
			return roleDifference;
		} else {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		}
	});
}
