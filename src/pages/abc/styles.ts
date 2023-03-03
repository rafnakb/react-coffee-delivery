import styled from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  height: 60vh;

  h1 {
    color: ${props => props.theme['purple-500']};
    padding-bottom: 1rem;
  }

  .displayButton {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  button {
    background: ${props => props.theme['gray-400']};
    padding: 1rem;
    width: 8rem;
    text-align: center;
    border-radius: 4px;

    &:hover {
      background: ${props => props.theme['gray-300']};
    }

    &:active {
      background: ${props => props.theme['purple-300']};
    }
  }
`;