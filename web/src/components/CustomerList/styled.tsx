import styled from 'styled-components';

export const WrapperTableAreaStyled = styled.div`
  margin: 2rem 6rem;
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
  margin: 2rem 0;

  ::placeholder {
    font-weight: 400;
    opacity: 0.7;
    color: #b6b6b6;
    padding-left: 1rem;
  }

  :focus {
    outline: none;
    padding-left: 1rem;

    ::placeholder {
      padding-left: 2px;
    }
  }

  & .ico-mglass {
    position: relative;
    display: inline-block;
    background: #fff;
    border-radius: 30px;
    height: 6px;
    width: 6px;
    border: 2px solid #888;

    &:after {
      content: '';
      height: 2px;
      width: 6px;
      background: #888;
      position: absolute;
      top: 7px;
      left: 5px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
    }
  }
`;
