import { useEffect, useState } from 'react';

import { EMPTY } from '@src/configuration/contants/constants';
import userService from '@src/services/user';

import { useUserData } from '@src/Providers/UserData/useUserData';
import { ButtonStyled, MenuSideStyled, WrapperTableAreaStyled } from './styled';

const NEUT_FEEL = 'neut';
const POSITIVE_FEEL = 'positive';
const NEGATIVE_FEEL = 'negative';

/**
 * @export
 * @component
 * @name CustomerList
 *
 * @description
 * Responsável por a área de listas de cancelamentos.
 */
export const CustomerList = (): JSX.Element => {
	const { handleSwitchModal, handleChangeUserData } = useUserData();
	const [user, setUser] = useState<any>([]);

	const getUsersData = async () => {
		const response = await userService.get();
		if (response.error) {
			// Should be implement a logic when api return error
			return;
		}

		setUser(response.data);
	};

	useEffect(() => {
		getUsersData();
	}, []);

	const verifiedCustomertatus = (fell: string) => {
		if (fell === NEGATIVE_FEEL) {
			return (
				<span className="badge is-danger is-light">
					<span className="icon is-medium">
						<i className="fak fa-error-medium" />
					</span>
					<span>{fell}</span>
				</span>
			);
		}
		if (fell === NEUT_FEEL) {
			return (
				<span className="badge is-warning is-light">
					<span className="icon is-medium">
						<i className="fak fa-warning-medium" />
					</span>
					<span>{fell}</span>
				</span>
			);
		}
		return (
			<span className="badge is-success is-light">
				<span className="icon is-medium">
					<i className="fak fa-success-medium" />
				</span>
				<span>{fell}</span>
			</span>
		);
	};

	const handleViewFullDataUser = (
		name: string,
		status: string,
		sentiment: string,
		id: string
	) => {
		handleChangeUserData({ name, status, sentiment, id });
		handleSwitchModal();
	};

	const handleConvertFeel = (feel: string) => {
		switch (feel) {
			case NEUT_FEEL:
				return 'Satisfeito';

			case POSITIVE_FEEL:
				return 'Muito Satisfeito';

			case NEGATIVE_FEEL:
				return 'Insatisfeito';

			default:
				return '';
		}
	};

	return (
		<WrapperTableAreaStyled>
			<MenuSideStyled>Cancelamentos</MenuSideStyled>

			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Status do contrato</th>
						<th>Sentimento do cliente</th>
						<th>Último chat</th>
					</tr>
				</thead>
				<tbody>
					{user?.length > EMPTY &&
						user?.map((customer: any) => (
							<tr key={Math.random()}>
								<td>
									<ButtonStyled
										type="button"
										onClick={() => {
											handleViewFullDataUser(
												customer.nome,
												customer.status,
												customer.historicFeel,
												customer.id
											);
										}}
									>
										{customer.nome}
									</ButtonStyled>
								</td>

								<td>{verifiedCustomertatus(customer.status)}</td>
								<td>{handleConvertFeel(customer.historicFeel)}</td>

								<td>{customer.historicMotivo}</td>
							</tr>
						))}
				</tbody>
			</table>
		</WrapperTableAreaStyled>
	);
};
