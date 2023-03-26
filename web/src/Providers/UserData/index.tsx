import React, { ReactNode, useState } from 'react';
import { createContext } from 'use-context-selector';

import { CreateContextData, UserDataType } from './types';

export const UserData = createContext({} as CreateContextData);

type UserDataProviderProps = {
	children: ReactNode;
};

/**
 * @export
 * @component
 * @name UserDataProvider
 *
 * @description
 * Responsável pelo controle dos estados dos dados do usuário
 */
export function UserDataProvider({
	children,
}: UserDataProviderProps): JSX.Element {
	const [user, setUser] = useState<UserDataType | null>(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	/**
	 * @function
	 * @name handleSwitchModal
	 *
	 * @description
	 * Responsável por controlar a exibição da modal
	 */
	const handleSwitchModal = (): void => {
		setModalIsOpen(!modalIsOpen);
	};

	/**
	 * @function
	 * @name handleChangeUserData
	 *
	 * @description
	 * Responsável por controlar o estado do usuário
	 */
	const handleChangeUserData = (params: UserDataType | null): void => {
		setUser(params);
	};

	return (
		<UserData.Provider
			value={{
				modalIsOpen,
				user,
				handleSwitchModal,
				handleChangeUserData,
			}}
		>
			{children}
		</UserData.Provider>
	);
}
