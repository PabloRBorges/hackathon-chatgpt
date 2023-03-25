import React, { useState } from 'react';
import { Chart, ArcElement, Legend, CategoryScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartStyled, ContainerGraphStyled } from './styled';

Chart.register(ArcElement, CategoryScale);

Chart.register(Legend);
type PropsDougnhutGraph = {
  labelsI: Array<string>;
  datasI: Array<number>;
  colorsI: Array<string>;
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
  const NUMBER_CFG = [100, 200, 125, 175];
  const colors = ['Red', 'Orange', 'Yellow', 'Blue'];
  const labels = [
    'Financeiro',
    'Suporte ruim',
    'Mal uso do produto',
    'Concorrencia',
  ];

  const labels2 = [
    'Cliente Satisfeito',
    'Cliente Neutro',
    'Cliente Insatisfeito',
  ];
  const colors2 = ['#009900', '#f2b157', '#a93639'];
  const numbers2 = [60, 30, 10];
  const [newOrderData, setNewOrderData] = useState<PropsDougnhutGraph>({
    labelsI: labels,
    datasI: NUMBER_CFG,
    colorsI: colors,
  });

  const data = {
    labels: newOrderData.labelsI,
    datasets: [
      {
        labels: newOrderData.colorsI,
        data: newOrderData.datasI,
        backgroundColor: newOrderData.colorsI,
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data,
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
          text: 'Todos os envios',
          color: '#393946',
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

  return (
    <ContainerGraphStyled>
      <ChartStyled>
        <Doughnut options={config.options} data={data} />
        <Doughnut options={config.options} data={data2} />
      </ChartStyled>
    </ContainerGraphStyled>
  );
};
