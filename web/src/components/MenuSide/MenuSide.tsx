import React from 'react';

import sidebarConfig from '@src/configuration/sidebar';

import List from './components/List';
import { Container, LogoStyled } from './styled';

type Props = {
	domain: string;
};

/**
 * @export
 * @component
 * @name MenuSide
 *
 * @description
 * responsável por conter o menu da aplicação .
 */
export const MenuSide = ({ domain }: Props): JSX.Element => (
	<Container>
		<LogoStyled
			src={`${domain}/images/zenvia-docs-logo.svg`}
			alt="logo zenvia docs"
		/>

		<List menu={sidebarConfig} />
	</Container>
);
