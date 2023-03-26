import React from 'react';
import {
	ContentSearchStyled,
	ContentStatusStyled,
	MultiSelectStyled,
} from './styled';

type Status = {
	label: string;
	value: number;
};

type Props = {
	handleSearchCustomers: (event: string) => void;
	selected: any;
	setSelected: (param: Status) => void;
	options: Array<any>;
};

/**
 * @export
 * @component
 * @name CustomerSearch
 *
 * @description
 * Responsável por controlar a busca na tabela
 */
export const Customersearch = ({
	handleSearchCustomers,
	selected,
	setSelected,
	options,
}: Props): JSX.Element => (
	<div className="is-flex my-3">
		<ContentSearchStyled>
			<div className="field">
				<p>Procure por clientes:</p>
				<p className="control has-icons-right">
					<input
						className="input"
						type="text"
						placeholder="Buscar clientes"
						onChange={(event) => handleSearchCustomers(event.target.value)}
					/>
					<span className="icon is-right is-action">
						<i className="far fa-search" />
					</span>
				</p>
			</div>
		</ContentSearchStyled>

		<ContentStatusStyled>
			<p>Selecione os status:</p>
			<MultiSelectStyled
				options={options}
				value={selected}
				onChange={setSelected}
				labelledBy="Selecione os status que desejar"
				overrideStrings={{
					allItemsAreSelected: 'Todos',
					selectAll: 'Todos',
					selectSomeItems: 'Selecionar sentimentos',
				}}
				disableSearch
			/>
		</ContentStatusStyled>
	</div>
);
