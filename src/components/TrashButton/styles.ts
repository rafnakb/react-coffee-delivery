import styled from "styled-components";

export const IconTextButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${props => props.theme['gray-400']};
  border-radius: 6px;
  gap: 4px;
  width: 100%;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  
  span {
    display: flex;
    padding: 0;
    color: ${props => props.theme['purple-500']};

    &:hover {
      color: ${props => props.theme['purple-700']};
    }
  }

  &:hover {
    color: ${props => props.theme['gray-800']};
    background: ${props => props.theme['gray-500']};
  }
`;