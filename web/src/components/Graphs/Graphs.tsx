import { useEffect, useState } from 'react';
import { Chart, ArcElement, Legend, CategoryScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import userService from '@src/services/user';
import { ChartStyled, ContainerGraphStyled } from './styled';

Chart.register(ArcElement, CategoryScale);

Chart.register(Legend);
type PropsDougnhutGraph = {
	labels: Array<string>;
	datasets: any;
};

/**
 * @export
 * @component
 * @name Graphs
 *
 * @description
 * Responsável por renderizar os gráficos de cancelados.
 */
export const Graphs = () => {
	const colors = ['#59101D', '#921A30', '#D92748'];

	const labels2 = [
		'Cliente Satisfeito',
		'Cliente Neutro',
		'Cliente Insatisfeito',
	];
	const colors2 = ['#1A8226', '#BF7118', '#921A30'];
	const numbers2 = [60, 30, 10];
	const [newOrderData, setNewOrderData] = useState<PropsDougnhutGraph | null>(null);

	const getGraph = async () => {
		const response = await userService.getGraphData();

		if (response.error) {
			// implement logic error
			return;
		}

		const labels = response.data.map((item: any) => item.tipo)
		const datasets = [
			{
				labels: colors,
				data: response.data.map((item: any) => item.valor),
				backgroundColor: colors,
				hoverOffset: 1,
			},
		];

		setNewOrderData({
			labels,
			datasets,
		});
	};

	useEffect(() => {
		getGraph();
	}, []);

	const config = {
		type: 'doughnut',
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: true,
					fullSize: true,
					position: 'right' as any,
				},
				title: {
					display: true,
					text: 'Motivos do cancelamento',
					color: '#000000',
					font: {
						size: 16,
					},
				},
			},

			animation: {
				duration: 2000,
				animateScale: true,
				animateRotate: true,
			},
		},
	};

	const data2 = {
		labels: labels2,
		datasets: [
			{
				labels: colors2,
				data: numbers2,
				backgroundColor: colors2,
				hoverOffset: 4,
			},
		],
	};

	const config2 = {
		type: 'doughnut',
		data2,
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: true,
					fullSize: true,
					position: 'right' as any,
				},
				title: {
					display: true,
					text: 'Sentimentos dos clientes',
					color: '#000000',
					font: {
						size: 16,
					},
				},
			},

			animation: {
				duration: 2000,
				animateScale: true,
				animateRotate: true,
			},
		},
	};



	return (
		<ContainerGraphStyled>
			<ChartStyled>
				{newOrderData && (
					<Doughnut options={config.options} data={newOrderData} />
				)}
				<Doughnut options={config2.options} data={data2} />
			</ChartStyled>
		</ContainerGraphStyled>
	);
};
