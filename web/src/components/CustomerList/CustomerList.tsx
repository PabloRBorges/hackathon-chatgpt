import React from 'react';
import { InputStyled, MenuSideStyled, WrapperTableAreaStyled } from './styled';

/**
 * @export
 * @component
 * @name CustomerList
 *
 * @description
 * Responsável por a área de listas de cancelamentos.
 */
export const CustomerList = (): JSX.Element => {
  const mockTable = [
    {
      name: 'Pablo Veloso',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '23/08/2022 às 19:30',
      status: 'Cancelado',
      sentiment: 'Insatisfeito',
    },
    {
      name: 'Pietro Brune',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '15/01/2021 às 15:37',
      status: 'Possível cancelamento',
      sentiment: 'Neutro',
    },
    {
      name: 'João Brito',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '23/08/2022 às 19:30',
      status: 'Cancelado',
      sentiment: 'Insatisfeito',
    },
    {
      name: 'Eduardo Henrique',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '15/01/2021 às 15:37',
      status: 'Baixa chance de cancelamento',
      sentiment: 'Satisfeito',
    },
    {
      name: 'João Brito',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '23/08/2022 às 19:30',
      status: 'Cancelado',
      sentiment: 'Insatisfeito',
    },
    {
      name: 'Pedro Borges',
      contractTime: '1 ano',
      historic: ['Financeiro', 'Suporte ruim'],
      date: '15/01/2021 às 15:37',
      status: 'Possível cancelamento',
      sentiment: 'Insatisfeito',
    },
  ];

  const verifiedCustomertatus = (status: string) => {
    if (status === 'Cancelado') {
      return (
        <span className="badge is-danger is-light">
          <span className="icon is-medium">
            <i className="fak fa-error-medium" />
          </span>
          <span>{status}</span>
        </span>
      );
    }
    if (status === 'Possível cancelamento') {
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
  return (
    <WrapperTableAreaStyled>
      <MenuSideStyled>Cancelamentos</MenuSideStyled>
      <InputStyled
        classNameName="ico-mglass"
        type="text"
        placeholder="Buscar clientes"
      />

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Motivos</th>
            <th>Data</th>
            <th>Status</th>
            <th>Sentimento</th>
          </tr>
        </thead>
        <tbody>
          {mockTable.map((customer) => (
            <tr>
              <td>{customer.name}</td>

              <td>
                Histórico de motivos{' '}
                <small>{customer.historic.map((item) => item)}</small>
              </td>
              <td>{customer.date}</td>
              <td>{verifiedCustomertatus(customer.status)}</td>

              <td>{customer.sentiment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </WrapperTableAreaStyled>
  );
};
