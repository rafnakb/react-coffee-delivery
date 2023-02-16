import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;

  background: ${(props) => props.theme['white-100']};

  img {
    /* width: 84.95px; */
    /* height: 40px; */
  }

`;