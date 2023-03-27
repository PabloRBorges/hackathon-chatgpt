export const STATUS_CANCELED = 'Cancelado';
export const STATUS_CANCELLING = 'Possível cancelamento';
export const STATUS_NOT_CANCELLING = 'Baixa chance de cancelamento';
export const STATUS_ACTIVE = 'Ativo';

export const MOCK_TABLE = [
	{
		name: 'Pablo Veloso',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '23/08/2022 às 19:30',
		status: STATUS_CANCELED,
		sentiment: 'Insatisfeito',
	},
	{
		name: 'Pietro Brune',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '15/01/2021 às 15:37',
		status: STATUS_CANCELLING,
		sentiment: 'Neutro',
	},
	{
		name: 'João Brito',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '23/08/2022 às 19:30',
		status: STATUS_CANCELED,
		sentiment: 'Insatisfeito',
	},
	{
		name: 'Eduardo Henrique',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '15/01/2021 às 15:37',
		status: STATUS_NOT_CANCELLING,
		sentiment: 'Satisfeito',
	},
	{
		name: 'João Brito',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '23/08/2022 às 19:30',
		status: STATUS_CANCELED,
		sentiment: 'Insatisfeito',
	},
	{
		name: 'Pedro Borges',
		contractTime: '1 ano',
		historic: ['Financeiro', 'Suporte ruim'],
		date: '15/01/2021 às 15:37',
		status: STATUS_CANCELLING,
		sentiment: 'Insatisfeito',
	},
];

export const EMPTY = 0;
