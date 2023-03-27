import { useEffect, useState } from 'react';

import {
	EMPTY,
	STATUS_CANCELED,
	STATUS_CANCELLING,
} from '@src/configuration/contants/constants';
import userService from '@src/services/user'

import { useUserData } from '@src/Providers/UserData/useUserData';
import {
	ButtonStyled,
	MenuSideStyled,
	WrapperTableAreaStyled,
} from './styled';

const NEUT_FEEL = "neut"
const POSITIVE_FEEL = "positive"
const NEGATIVE_FEEL = "negative"


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
			return
		}

		setUser(response.data)
	}

	useEffect(() => {
		getUsersData()
	}, [])

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

	const handleViewFullDataUser = (
		name: string,
		status: string,
		sentiment: string,
		id: string,
	) => {
		handleChangeUserData({ name, status, sentiment, id });
		handleSwitchModal();
	};

	const handleConvertFeel = (feel: string) => {

		switch (feel) {
			case NEUT_FEEL:
				return 'Satisfeito'

			case POSITIVE_FEEL:
				return 'Muito Satisfeito'

			case NEGATIVE_FEEL:
				return 'Insatisfeito'

			default:
				return ''
		}
	}

	return (
		<WrapperTableAreaStyled>
			<MenuSideStyled>Cancelamentos</MenuSideStyled>

			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Motivos</th>
						<th>Status</th>
						<th>Sentimento</th>
					</tr>
				</thead>
				<tbody>
					{
						user?.length > EMPTY &&
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

								<td>
									Histórico de motivos{' '}
									<small>{customer.historicFeel}</small>
								</td>
								<td>{verifiedCustomertatus(customer.status)}</td>

								<td>{handleConvertFeel(customer.historicFeel)}</td>
							</tr >
						))}
				</tbody >
			</table >
		</WrapperTableAreaStyled >
	);
};
