import { FieldStyled } from './styled';

type Props = {
	name: string;
	status: string;
	feeling: string;
};

export const GeneralData = ({ name, status, feeling }: Props) => (
	<>
		<FieldStyled>
			Nome: <span>{name}</span>
		</FieldStyled>

		<FieldStyled>
			Status: <span>{status}</span>
		</FieldStyled>

		<FieldStyled>
			Sentimento: <span>{feeling}</span>
		</FieldStyled>
	</>
);
