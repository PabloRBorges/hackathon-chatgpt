import React, { useState } from 'react';

import { Menu } from '../../types';
import Accordion from '../Accordion';
import {
	ButtonStyled,
	ContainerStyled,
	TitleItemStyled,
	SubMenuStyled,
	ContainerAccordionStyled,
	LineStyled,
	ContainerSubMenuStyled,
	ContainerAccordion,
} from './styled';

type Props = {
	menu: Menu[];
};

/**
 * @export
 * @component
 * @name List
 *
 * @description
 * Responsável por criar a lista de itens do menu side
 */
export const List = ({ menu }: Props): JSX.Element => (
	<ContainerStyled className="menu-list">
		{menu.map((item) => {
			const [open, setOpen] = useState(false);

			/**
			 * @function
			 * @name handleClickItem
			 *
			 * @description
			 */
			const handleClickItem = (link: string, hasSubMenu: boolean) => {
				if (hasSubMenu) {
					setOpen(!open);
				}
			};

			return (
				<li key={item.name}>
					<ButtonStyled
						type="button"
						bold={item.bold}
						onClick={() => {
							handleClickItem(item.link, item.subMenu?.length > 0);
						}}
						open={open}
						disabled={item.disabled}
					>
						<TitleItemStyled>
							{item.icon}
							{item.name}
						</TitleItemStyled>
						{item.subMenu?.length > 0 && (
							<i className="fa-regular fa-chevron-down" />
						)}
					</ButtonStyled>

					<ContainerAccordion open={open}>
						<Accordion backgroundColor="#f7f7f7" open={open} width="100%">
							<ContainerAccordionStyled>
								<LineStyled />
								{item.subMenu.map((submenu) => (
									<ContainerSubMenuStyled key={submenu.name}>
										<SubMenuStyled
											onClick={() => {
												handleClickItem(submenu.link, false);
											}}
											disabled={submenu.disabled}
										>
											{submenu.name}
										</SubMenuStyled>
									</ContainerSubMenuStyled>
								))}
							</ContainerAccordionStyled>
						</Accordion>
					</ContainerAccordion>
				</li>
			);
		})}
	</ContainerStyled>
);
