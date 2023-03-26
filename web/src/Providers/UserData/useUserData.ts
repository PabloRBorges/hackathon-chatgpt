import { useContextSelector } from 'use-context-selector';

import { UserData } from '.';
import { CreateContextData } from './types';

/**
 * @export
 * @hook
 * @name useUserData
 *
 * @description
 * Hook responsável por controlar os dados do usuário
 */
export const useUserData = (): CreateContextData => {
	const modalIsOpen = useContextSelector(
		UserData,
		(userData) => userData.modalIsOpen
	);

	const handleSwitchModal = useContextSelector(
		UserData,
		(userData) => userData.handleSwitchModal
	);

	const user = useContextSelector(UserData, (userData) => userData.user);
	const handleChangeUserData = useContextSelector(
		UserData,
		(userData) => userData.handleChangeUserData
	);

	return {
		user,
		handleChangeUserData,
		modalIsOpen,
		handleSwitchModal,
	};
};
