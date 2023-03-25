import React from 'react';
import { MenuSideStyled } from './styled';

/**
 * @export
 * @component
 * @name Menu
 *
 * @description
 * Responsável por controlar o Menu superior da tela.
 */
export const Menu = (): JSX.Element => (
  <MenuSideStyled>
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <a className="navbar-item">
          <span className="navbar-item has-text-weight-bold is-size-4">
            Cancelados
          </span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Possíveis cancelamentos</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="avatar is-primary">Z</div>
          </div>
        </div>
      </div>
    </nav>
  </MenuSideStyled>
);
