/* eslint-disable prettier/prettier */
export type Menu = {
	icon: JSX.Element;
	name: string;
	link: string;
	bold: boolean;
	role: string | null;
	disabled: boolean;
	default: boolean;
	subMenu:
	| {
		name: string;
		link: string;
		bold: boolean;
		role: string | null;
		disabled: boolean;
		default: boolean;
	}[]
	| [];
};
