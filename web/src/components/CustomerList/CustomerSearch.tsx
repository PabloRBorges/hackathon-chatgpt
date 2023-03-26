import React from 'react';
import { IconSearch } from './iconSearch';
import {
  ContentMultiSelectStyled,
  ContentSearchStyled,
  ContentStatusStyled,
  IconSearchStyled,
  InputStyled,
  LabelStyled,
  MultiSelectStyled,
} from './styled';

type Status = {
  id: string;
  status: string;
};

type Props = {
  handleSearchCustomers: (event: string) => void;
  selected: any;
  setSelected: (param) => void;
  options: Array<any>;
};

/**
 * @export
 * @component
 * @name CustomerSearch
 *
 * @description
 * Responsável por controlar a busca na tabela
 */
export const Customersearch = ({
  handleSearchCustomers,
  selected,
  setSelected,
  options,
}: Props): JSX.Element => (
  <div className="is-flex">
    {/* <ContentSearchStyled>
      <p>Procure por clientes:</p>
      <InputStyled
        className="has-shadow-level-1"
        type="text"
        placeholder="Buscar clientes"
        onChange={(event) => handleSearchCustomers(event.target.value)}
      />
      <IconSearchStyled>
        <IconSearch />
      </IconSearchStyled>
    </ContentSearchStyled> */}

    <ContentSearchStyled>
      <div className="field">
        <p>Procure por clientes:</p>
        <p className="control has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Buscar clientes"
            onChange={(event) => handleSearchCustomers(event.target.value)}
          />
          <a className="icon is-right is-action">
            <i className="far fa-search" />
          </a>
        </p>
      </div>
    </ContentSearchStyled>

    <ContentStatusStyled>
      <p>Selecione os status:</p>
      <MultiSelectStyled
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Selecione os status que desejar"
        disableSearch
        hasSelectAll
      />
    </ContentStatusStyled>
  </div>
);
