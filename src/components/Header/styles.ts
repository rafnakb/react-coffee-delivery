import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--wideSize);
  margin: 0 auto;
  background: ${props => props.theme['white-100']};
  z-index: 999px;
  height: 6.5rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 160px;

  a {
    display: flex;
    text-decoration: none;
  }

  img {
    width: 84.95px;
    height: 40px;
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      padding: 8px;
      color: ${props => props.theme['yellow-700']};
      background: ${props => props.theme['yellow-300']};
      border-radius: 6px;
    }

    span {
      display: flex;
      align-items: center;
      padding: 8px;
      gap: 0.4rem;
      background: ${props => props.theme['purple-300']};
      border-radius: 6px;
      color: ${props => props.theme['purple-500']};

      p {
        color: ${props => props.theme['purple-700']};
      }
    }
  }

`;

export const CartItemCounter = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  color: ${props => props.theme['white-100']};
  background: ${props => props.theme['yellow-700']};

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  position: absolute;
  top: 24px;
  right: 150px;
`;