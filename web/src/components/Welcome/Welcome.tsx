import { useUserData } from '@src/stores/useUserData';

import CustomerList from '../CustomerList';
// import CustomerProfile from '../CustomerProfile';
import Filters from '../Filters';
import Graphs from '../Graphs';

import Menu from '../Menu';
import MenuSide from '../MenuSide';
import { ContainerStyled } from './styled';

/**
 * @export
 * @component
 * @name Welcome
 *
 * @description
 * Responsável por chamar todos os componentes
 * que renderizam a tela.
 */
export const Welcome = () => {
  const { name, age } = useUserData();

  return (
    <>
      <MenuSide domain="https://app.dev.d1.cx" />

      <ContainerStyled>
        <Menu />
        <Filters />
        <Graphs />
        <CustomerList />
        {/* <CustomerProfile /> */}
      </ContainerStyled>
    </>
  );
};
