/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import { Chart, ArcElement, Legend, CategoryScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import userService from '@src/services/user';

import { ChartStyled, ContainerGraphStyled } from './styled';

Chart.register(ArcElement, CategoryScale);

Chart.register(Legend);

type PropsDougnhutGraphs = {
	labels: Array<string>;
	datasets: any;
};

const NEUT_FEEL = 'neut';
const POSITIVE_FEEL = 'positive';
const NEGATIVE_FEEL = 'negative';

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

	const colors2 = ['#1A8226', '#BF7118', '#921A30'];
	const [newOrderData, setNewOrderData] = useState<PropsDougnhutGraphs | null>(
		null
	);
	const [newOrderFeels, setNewOrderFeels] =
		useState<PropsDougnhutGraphs | null>(null);

	const handleConvertFeel = (feel: string) => {
		switch (feel) {
			case NEUT_FEEL:
				return 'Satisfeito';

			case POSITIVE_FEEL:
				return 'Muito Satisfeito';

			case NEGATIVE_FEEL:
				return 'Insatisfeito';
		}
	};

	const getFells = async () => {
		const response = await userService.getGraphFeels();
		if (response.error) {
			// Should be implement a logic when api return error
			return;
		}

		const labels = response.data.map(
			(item: { feel: string; valor: string }) => item.feel
		);
		const datasets = [
			{
				labels: colors2,
				data: response.data.map(
					(item: { feel: string; valor: string }) => item.valor
				),
				backgroundColor: colors2,
				hoverOffset: 1,
			},
		];

		setNewOrderFeels({
			labels,
			datasets,
		});
	};

	const getGraph = async () => {
		const response = await userService.getGraphData();

		if (response.error) {
			// implement logic error
			return;
		}

		const labels = response.data.map((item: any) => item.tipo);
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
		getFells();
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

	const config2 = {
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
				{newOrderFeels && (
					<Doughnut options={config2.options} data={newOrderFeels} />
				)}
			</ChartStyled>
		</ContainerGraphStyled>
	);
};
