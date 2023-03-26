export type CreateContextData = {
	modalIsOpen: boolean;
	user: UserDataType | null;
	handleSwitchModal: () => void;
	handleChangeUserData: (params: UserDataType | null) => void;
};

export type UserDataType = {
	name: string;
	sentiment: string;
	status: string;
};
