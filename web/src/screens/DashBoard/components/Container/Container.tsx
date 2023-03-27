import CustomerList from '@src/components/CustomerList';
import Graphs from '@src/components/Graphs';
import Menu from '@src/components/Menu';
import MenuSide from '@src/components/MenuSide';
import ModalUser from '@src/components/ModalUser';
import { useUserData } from '@src/Providers/UserData/useUserData';

import { ContainerStyled } from './styled';

export const Container = () => {
	const { modalIsOpen } = useUserData();

	return (
		<>
			{modalIsOpen && <ModalUser />}

			<MenuSide domain="https://app.dev.d1.cx" />
			<Menu />

			<ContainerStyled>
				<Graphs />
				<CustomerList />
			</ContainerStyled>
		</>
	);
};
