declare namespace SGA {
	interface InitiativeDocument {
		name: string;
		thumbnail: {};
		content: any[];
		_id: string;
	}

	interface ArticleDocument {
		title: string;
		thumbnail: {};
		content: any[];
		author: string;
		summary: string;
		publish_date: string;
		_id: string;
	}

	interface MemberDocument {
		_id: string;
		name: string;
		year: string;
		committee: 'excomm' | 'officer' | 'class';
		role: string;
		profile_photo: {};
		bio: string
	}
}
