import { MultiSelect } from 'react-multi-select-component';
import styled from 'styled-components';
import { IconSearch } from './iconSearch';

export const WrapperTableAreaStyled = styled.div`
  margin: 2rem 6rem 6rem;
`;

export const MenuSideStyled = styled.div`
  text-align: center;
  border-top: 1px solid #d9d9d9;
  padding-top: 2rem;
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px;
  margin-bottom: 2rem;
  margin-top: 0.25rem;
  padding-left: 1rem;

  ::placeholder {
    font-weight: 400;
    opacity: 0.7;
    color: #b6b6b6;
  }

  :focus {
    outline: none;
    padding-left: 1rem;

    ::placeholder {
      padding-left: 2px;
    }
  }
`;

export const IconSearchStyled = styled.div`
  width: 0.75rem;
  position: absolute;
  margin-top: 2rem;
  left: 370px;
`;

export const ContentSearchStyled = styled.div`
  font-size: 0.75rem;
  color: #888;
  display: flex;
  flex-direction: column;
  width: 300px;

  &&& {
    margin: 0;
    padding: 0;
  }
`;

export const MultiSelectStyled = styled(MultiSelect)`
  border: none;
  outline: none;
  box-shadow: 0;
  &&& {
    width: 300px;
    height: 40px;
  }
`;

export const ContentStatusStyled = styled.div`
  &&& {
    border-radius: 50px;
    margin-bottom: 0;
    font-size: 0.75rem;
    color: #888;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
`;
