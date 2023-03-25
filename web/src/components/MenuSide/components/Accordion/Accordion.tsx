/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';

import { AccordionStyled, DropdownStyled } from './styled';

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
	width: string;
	overflow?: string;
	open: boolean;
	backgroundColor: string;
};

/**
 * @export
 * @component
 * @name Accordion
 *
 * @description
 * Componente responsável por montar o Accordion.
 */
export const Accordion = ({
	children,
	...rest
}: AccordionProps): JSX.Element => (
	<AccordionStyled {...rest}>
		<DropdownStyled {...rest}>{children}</DropdownStyled>
	</AccordionStyled>
);
