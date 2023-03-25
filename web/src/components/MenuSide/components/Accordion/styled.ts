import styled from 'styled-components';

type PropsAccordion = {
	width: string;
	open: boolean;
	overflow?: string;
	backgroundColor: string;
};

export const AccordionStyled = styled.div<PropsAccordion>`
	width: ${({ width }) => width};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 0px 0px 8px 8px;
`;

export const DropdownStyled = styled.div<PropsAccordion>`
	transition: all 0.2s ease-out;
	opacity: ${({ open }) => (open ? 1 : 0)};
	max-height: ${({ open }) => (open ? '100%' : 0)};
	overflow: ${({ overflow }) => overflow};
	padding: ${({ open }) => (open ? '15px 20px' : '0')};
`;
