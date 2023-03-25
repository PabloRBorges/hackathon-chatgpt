import React, { useState } from 'react';

import {
  MOCK_TABLE,
  STATUS_CANCELED,
  STATUS_CANCELLING,
} from '@src/configuration/contants/constants';

import {
  ContentSearchStyled,
  InputStyled,
  MenuSideStyled,
  WrapperTableAreaStyled,
} from './styled';

type Customers = {
  name: string;
  historic: Array<string>;
  contractTime: string;
  date: string;
  status: string;
  sentiment: string;
};

/**
 * @export
 * @component
 * @name CustomerList
 *
 * @description
 * Responsável por a área de listas de cancelamentos.
 */
export const CustomerList = (): JSX.Element => {
  const [listTable, setListTable] = useState<Array<Customers>>(MOCK_TABLE);
  const verifiedCustomertatus = (status: string) => {
    if (status === STATUS_CANCELED) {
      return (
        <span className="badge is-danger is-light">
          <span className="icon is-medium">
            <i className="fak fa-error-medium" />
          </span>
          <span>{status}</span>
        </span>
      );
    }
    if (status === STATUS_CANCELLING) {
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

  const handleSearchCustomers = (contentInput: string) => {
    const filterTable = MOCK_TABLE.filter((item) =>
      item.name.toLowerCase().includes(contentInput.toLowerCase())
    );
    setListTable(filterTable);
  };
  return (
    <WrapperTableAreaStyled>
      <MenuSideStyled>Cancelamentos</MenuSideStyled>
      <ContentSearchStyled>
        <p>Procure por clientes:</p>
        <InputStyled
          className="has-shadow-level-1 "
          type="text"
          placeholder="Buscar clientes"
          onChange={(event) => handleSearchCustomers(event.target.value)}
        />
      </ContentSearchStyled>

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
          {listTable.map((customer) => (
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
