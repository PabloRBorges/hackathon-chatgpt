import styled, { css } from 'styled-components';

export const ContainerStyled = styled.ul`
  margin-top: 17px;

  max-height: calc(100% - 136px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 8px;
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d6d6d6;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9d9d9d;
    border-radius: 10px;
    height: 8px;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
  div {
    margin-right: 5px;
  }
  :last-child {
    margin-right: 0px;
  }
`;

type ButtonProps = {
  bold?: boolean;
  open: boolean;
};

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  padding: 14px 16px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: #393946;

  ${({ open }) =>
    open
      ? css`
          > i {
            transition: all 300ms ease-in-out;
            transform: rotate(180deg);
          }
        `
      : css`
          > i {
            transition: all 300ms ease-in-out;
            transform: rotate(0deg);
          }
        `}

  &:enabled {
    cursor: pointer;

    &:hover {
      background-color: #e0e0e2;
    }
  }
`;

export const TitleItemStyled = styled.p`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const ContainerSubMenuStyled = styled.div`
  display: flex;
  align-items: center;
  :before {
    display: block;
    content: '';
    width: 8px;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
  }
`;

export const SubMenuStyled = styled.button`
  font-size: 16px;
  font-weight: 400;
  border-left: 1px solid #d9d9d9;
  background: transparent;
  border: 0;
  padding: 12px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  margin-left: 3px;

  &:enabled {
    cursor: pointer;

    &:hover {
      background-color: #e0e0e2;
    }
  }
`;

export const ContainerAccordionStyled = styled.div`
  display: grid;
  position: relative;
`;

export const LineStyled = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  width: 1px;
  height: calc(100% - 23px);
`;

type AccordionProps = {
  open: boolean;
};

export const ContainerAccordion = styled.div<AccordionProps>`
  > div > div {
    padding-top: 0;
    padding-bottom: 6px;
  }

  ${({ open }) =>
    open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;
