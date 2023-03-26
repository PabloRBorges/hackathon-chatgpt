import { ContainerStyled, FieldStyled } from './styled';

type Props = {
	name: string;
	status: string;
	feeling: string;
};

const STATUS_CANCELLED = 'Cancelado';
const STATUS_IS_POSSIBLE_TO_CANCEL = 'Possível cancelamento';
const STATUS_IS_LOW_POSSIBLE_TO_CANCEL = 'Baixa chance de cancelamento';
export const GeneralData = ({ name, status, feeling }: Props) => {
	const handleGetStyleByStatus = () => {
		switch (status) {
			case STATUS_CANCELLED:
				return ['badge is-danger is-light', 'fak fa-error-medium'];

			case STATUS_IS_POSSIBLE_TO_CANCEL:
				return ['badge is-warning is-light', 'fak fa-warning-medium'];

			case STATUS_IS_LOW_POSSIBLE_TO_CANCEL:
				return ['badge is-success is-light', 'fak fa-success-medium'];

			default:
				return ['badge is-success is-light', 'fak fa-success-medium'];
		}
	};

	const statusStyled = handleGetStyleByStatus();

	return (
		<ContainerStyled>
			<FieldStyled>
				Nome: <span>{name}</span>
			</FieldStyled>

			<FieldStyled>
				Status:{' '}
				<span className={statusStyled[0]}>
					<span className="icon is-medium">
						<i className={statusStyled[1]} />
					</span>
					<span>{status}</span>
				</span>
			</FieldStyled>

			<FieldStyled>
				Ultimo Sentimento: <span>{feeling}</span>
			</FieldStyled>
		</ContainerStyled>
	);
};
