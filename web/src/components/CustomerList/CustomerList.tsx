import { useEffect, useState } from 'react';

import { EMPTY } from '@src/configuration/contants/constants';
import userService from '@src/services/user';

import { useUserData } from '@src/Providers/UserData/useUserData';
import { ButtonStyled, MenuSideStyled, WrapperTableAreaStyled } from './styled';

const NEUT_FEEL = 'neut';
const POSITIVE_FEEL = 'positive';
const NEGATIVE_FEEL = 'negative';

const USER_CANCELLED = 'cancelado';

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

	const verifiedCustomertatus = (status: string) => {
		if (status === USER_CANCELLED) {
			return (
				<span className="badge is-danger is-light">
					<span className="icon is-medium">
						<i className="fak fa-error-medium" />
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



	const handleConvertHistoric = (historic: string) => {
		if (historic === "Suporteruim") {
			return "Suporte"
		}

		return historic
	};

	const getStyledFeel = (feel: string) => {


		switch (feel) {
			case POSITIVE_FEEL:
				return ["badge is-success is-light", "fak fa-success-medium"]
			case NEUT_FEEL:
				return ["badge is-warning is-light", "fak fa-warning-medium"]
			case NEGATIVE_FEEL:
				return ["badge is-danger is-light", "fak fa-error-medium"]
			default:
				return []
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
								<td>
									<span className={getStyledFeel(customer.historicFeel)[0]}>
										<span className="icon is-medium">
											<i className={getStyledFeel(customer.historicFeel)[1]} />
										</span>
										<span>{handleConvertFeel(customer.historicFeel)}</span>
									</span>
								</td>

								<td>{handleConvertHistoric(customer.historicoMotivo)}</td>
							</tr>
						))}
				</tbody>
			</table>
		</WrapperTableAreaStyled>
	);
};
