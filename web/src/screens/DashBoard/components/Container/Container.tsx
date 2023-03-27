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

			<MenuSide domain="https://yt3.googleusercontent.com/RTGA6bbJfQ7PsOs4MBh5FO-kibF70yxmYUQOcIyd2VwvF3mZ7CmuzO9XA6VtjIbYda7F9iRC=s900-c-k-c0x00ffffff-no-rj" />
			<Menu />

			<ContainerStyled>
				<Graphs />
				<CustomerList />
			</ContainerStyled>
		</>
	);
};
