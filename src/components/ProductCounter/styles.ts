import styled from "styled-components";

export const ProductCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0 4px;
  padding: 5.5px 8px;
  border-radius: 6px;
  background: ${props => props.theme['gray-400']};

  span {
    width: 1.25rem;
    text-align: center;
    background: transparent;
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme['gray-900']};

    &::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    & { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  button {
    align-items: center;
    background: transparent;
    padding: 0;
    width: 14px;
    height: 14px;
    color: ${props => props.theme['purple-500']};

    &:hover {
      color: ${props => props.theme['purple-700']};
    }
  }
`;