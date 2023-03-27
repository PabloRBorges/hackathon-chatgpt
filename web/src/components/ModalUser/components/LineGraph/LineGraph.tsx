/* eslint-disable default-case */
import { Chart, ArcElement, CategoryScale, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import userService from '@src/services/user';

Chart.register(ArcElement, CategoryScale);

Chart.register(...registerables);

type Props = {
	id: string;
}

export const LineGraph = ({ id }: Props) => {
	const [data, setData] = useState<any>(null);

	const getAllGraphData = async () => {
		const response = await userService.getFeels(id);

		if (response.error) {
			//logic to error
			return;
		}


		const labels = response.data.map((item: any) => item.data)
		const datasets = [
			{
				label: 'Sentimentos',
				data: response.data.map((item: any) => item.value),
				fill: false,
				borderColor: '#5A4CFB',
			},
		];

		setData({
			labels: labels,
			datasets: datasets,
		});

	}

	useEffect(() => {
		getAllGraphData();
	}, [])


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

	return (
		<>
			{
				data && (
					<Line data={data} options={config.options} />
				)
			}
		</>
	);
};
