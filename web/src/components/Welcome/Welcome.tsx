import { useUserData } from '@src/stores/useUserData';

import MenuSide from '../MenuSide';
import { ContainerStyled } from './styled';

export const Welcome = () => {
	const { name, age } = useUserData();

	return (
		<>
			<MenuSide domain="https://app.dev.d1.cx" />

			<ContainerStyled>
				<h1>Hello World</h1>
				<h2>{name}</h2>
				<h3>{age}</h3>
			</ContainerStyled>
		</>
	);
};
