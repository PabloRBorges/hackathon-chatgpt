import api from '../../api';

const convertFeel = (feel: string) => {
	switch (feel) {
		case "negative":
			return 1;

		case "neut":
			return 2;

		case "positive":
			return 3;


		default:
			break;
	}
};

export const get = async () => {
	try {
		const response = await api.get('/ChatGPT');

		return {
			error: false,
			data: response.data,
		}
	} catch (error) {
		return {
			error: false,
			data: error,
		}
	}
}

function getMonthInPortuguese(dataString: string) {
	const meses = [
		"Janeiro", "Fevereiro", "Março", "Abril",
		"Maio", "Junho", "Julho", "Agosto",
		"Setembro", "Outubro", "Novembro", "Dezembro"
	];

	const data = new Date(dataString);
	const mes = data.getMonth();

	return `${meses[mes]} de ${data.getFullYear()}`;
}

export const getFeels = async (id: string) => {
	try {
		const response = await api.get(`/FeelsClients/${id}`);

		return {
			error: false,
			data: response.data.map((item: any) => ({
				...item,
				data: getMonthInPortuguese(item.data),
				value: convertFeel(item.feel),
			})),
		}
	} catch (error) {
		return {
			error: false,
			data: error,
		}
	}
}

export const getGraphData = async () => {
	try {
		const response = await api.get('/HistoricChatMessages');
		console.log(response.data) 
		return {
			error: false,
			data: response.data,
		}
	} catch (error) {
		return {
			error: false,
			data: error,
		}
	}
}
