export type CreateContextData = {
	modalIsOpen: boolean;
	user: UserDataType | null;
	handleSwitchModal: () => void;
	handleChangeUserData: (params: UserDataType | null) => void;
};

export type UserDataType = {
	id: string;
	name: string;
	sentiment: string;
	status: string;
};
