/* eslint-disable default-case */
import { Chart, ArcElement, CategoryScale, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(ArcElement, CategoryScale);

Chart.register(...registerables);

export const LineGraph = () => {
	const data = {
		labels: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
		],
		datasets: [
			{
				label: 'Sentimentos',
				data: [1, 2, 3, 3, 2, 1, 2],
				fill: false,
				borderColor: '#5A4CFB',
			},
		],
	};

	const config = {
		type: 'line',
		data,
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label(context: any) {
							switch (context.parsed.y) {
								case 0:
									return '';
								case 1:
									return 'Sentimento: Insatisfeito';

								case 2:
									return 'Sentimento: Neutro';

								case 3:
									return 'Sentimento: Satisfeito';
							}
						},
					},
				},
			},
			scales: {
				y: {
					ticks: {
						beginAtZero: true,
						min: 0,
						max: 3,
						stepSize: 1,
						callback(value: any) {
							switch (value) {
								case 0:
									return '';
								case 1:
									return 'Insatisfeito';

								case 2:
									return 'Neutro';

								case 3:
									return 'Satisfeito';
							}
						},
					},
				},
			},
			transitions: {
				show: {
					animations: {
						x: {
							from: 0,
						},
						y: {
							from: 0,
						},
					},
				},
				hide: {
					animations: {
						x: {
							to: 0,
						},
						y: {
							to: 0,
						},
					},
				},
			},
		},
	};

	return <Line data={data} options={config.options} />;
};
