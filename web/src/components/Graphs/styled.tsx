import styled from 'styled-components';

export const ContainerGraphStyled = styled.div`
  margin: 0 7.5rem;
  width: 100%;
`;

export const ChartStyled = styled.div`
  width: 410px;
  display: flex;
  gap: 5rem;
`;

export const LoadingStyled = styled.p`
  display: inline-grid;
  color: #9196ab;
  font-size: 12px;
  svg {
    margin-left: 8px;
    margin-top: 120px;
    margin-bottom: 10px;

    @keyframes loading {
      0% {
        transform: rotate(0);
      }
    }

    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
    animation: loading 2s linear infinite;
  }
`;
