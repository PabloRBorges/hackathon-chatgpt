import styled from 'styled-components';
import { MultiSelect } from 'react-multi-select-component';

export const WrapperTableAreaStyled = styled.div`
	margin: 2rem 6rem 6rem;
`;

export const MenuSideStyled = styled.h3`
	font-size: 24px;
	text-align: center;
	border-top: 1px solid #d9d9d9;
	padding-top: 2rem;
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

export const ButtonStyled = styled.button`
	border: 0;
	cursor: pointer;
	background: transparent;
	padding: 8px;

	&:hover {
		color: #5a4cfb;
	}
`
