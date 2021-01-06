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
		bio: string;
	}

	interface MissionDocument {
		mission: string;
		vision: string;
		inspiration: string;
		quote_text: string;
		quote_author: string;
	}

	interface GetInvolvedWay {
		_id: string;
		title: string;
		text: string;
	}

	interface GetInvolvedDocument {
		ways: GetInvolvedWay[];
	}

	interface FooterDocument {
		columns: {
			_id: string;
			content: any[];
		}[];
	}
}
