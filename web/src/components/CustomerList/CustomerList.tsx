import { useState } from 'react';

import {
	EMPTY,
	MOCK_TABLE,
	STATUS_CANCELED,
	STATUS_CANCELLING,
	STATUS_NOT_CANCELLING,
} from '@src/configuration/contants/constants';

import debouncedSave from '@src/utils/deboucedSave';
import { useUserData } from '@src/Providers/UserData/useUserData';
import {
<<<<<<< Updated upstream
	ButtonStyled,
=======
>>>>>>> Stashed changes
	ContentSearchStyled,
	IconSearchStyled,
	InputStyled,
	MenuSideStyled,
	WrapperTableAreaStyled,
} from './styled';
import { LoadingTable } from './LoadingTable/LoadingTable';
import EmptyMessage from '../EmptyMessage';
import { Customersearch } from './CustomerSearch';
import { usePagination } from '../Pagination/usePagination';

type Status = {
	label: string;
	value: number;
};

type Customers = {
	name: string;
	historic: Array<string>;
	contractTime: string;
	date: string;
	status: string;
	sentiment: string;
};

/**
 * @export
 * @component
 * @name CustomerList
 *
 * @description
 * Responsável por a área de listas de cancelamentos.
 */
export const CustomerList = (): JSX.Element => {
<<<<<<< Updated upstream
	const { handleSwitchModal, handleChangeUserData } = useUserData();
	const [listTable, setListTable] = useState<Array<Customers>>(MOCK_TABLE);
	const [isLoading, setIsLoading] = useState(false);
=======
	const [listTable, setListTable] = useState<Array<Customers>>(MOCK_TABLE);
	const [isLoading, setIsLoading] = useState(false);
	const [selected, setSelected] = useState<Array<Status>>([]);
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);

	const handlePagination = (e) => {
		setQuery(e.target.value);
		setPageNumber(1);
	};

	usePagination(query, pageNumber);

>>>>>>> Stashed changes
	const verifiedCustomertatus = (status: string) => {
		if (status === STATUS_CANCELED) {
			return (
				<span className="badge is-danger is-light">
					<span className="icon is-medium">
						<i className="fak fa-error-medium" />
					</span>
					<span>{status}</span>
				</span>
			);
		}
		if (status === STATUS_CANCELLING) {
			return (
				<span className="badge is-warning is-light">
					<span className="icon is-medium">
						<i className="fak fa-warning-medium" />
					</span>
					<span>{status}</span>
				</span>
			);
		}
		return (
			<span className="badge is-success is-light">
				<span className="icon is-medium">
					<i className="fak fa-success-medium" />
				</span>
				<span>{status}</span>
			</span>
		);
	};

	// Fim do destaque

	const handleSearchCustomers = (contentInput: string) => {
		const filterTable = MOCK_TABLE.filter((item) =>
			item.name.toLowerCase().includes(contentInput.toLowerCase())
		);

<<<<<<< Updated upstream
		const filterStatusTable = MOCK_TABLE.filter((item) =>
			[selected].includes(item.status)
		);

		console.log(filterStatusTable);
=======
>>>>>>> Stashed changes
		debouncedSave({
			filterValue: filterTable,
			setValue: setListTable,
			setIsLoading,
		});
	};

<<<<<<< Updated upstream
	const handleViewFullDataUser = (
		name: string,
		status: string,
		sentiment: string
	) => {
		handleChangeUserData({ name, status, sentiment });
		handleSwitchModal();
	};

	const mockLoading = [1, 2, 3, 4, 5];
	const [selected, setSelected] = useState([]);
=======
	const mockLoading = [1, 2, 3, 4, 5];
>>>>>>> Stashed changes

	const data = [
		{
			label: STATUS_CANCELLING,
			value: 1,
		},
		{ label: STATUS_CANCELED, value: 2 },
		{ label: STATUS_NOT_CANCELLING, value: 3 },
	];

	return (
		<WrapperTableAreaStyled>
			<MenuSideStyled>Cancelamentos</MenuSideStyled>
			<Customersearch
				options={data}
				selected={selected}
				setSelected={setSelected}
				handleSearchCustomers={handleSearchCustomers}
			/>
			{!isLoading && listTable.length === EMPTY && (
				<EmptyMessage message="Ops, não encontramos nenhum cliente, verifique seus filtros" />
			)}
			{isLoading &&
				mockLoading.map((loading) => (
					<td key={loading}>
						<LoadingTable />{' '}
					</td>
				))}

			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Motivos</th>
						<th>Data</th>
						<th>Status</th>
						<th>Sentimento</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading &&
						listTable.length > EMPTY &&
						listTable.map((customer) => (
							<tr key={Math.random()}>
<<<<<<< Updated upstream
								<td>
									<ButtonStyled
										type="button"
										onClick={() => {
											handleViewFullDataUser(
												customer.name,
												customer.status,
												customer.sentiment
											);
										}}
									>
										{customer.name}
									</ButtonStyled>
								</td>
=======
								<td>{customer.name}</td>
>>>>>>> Stashed changes

								<td>
									Histórico de motivos{' '}
									<small>{customer.historic.map((item) => item)}</small>
								</td>
								<td>{customer.date}</td>
								<td>{verifiedCustomertatus(customer.status)}</td>

								<td>{customer.sentiment}</td>
							</tr>
						))}
				</tbody>
			</table>
		</WrapperTableAreaStyled>
	);
};
