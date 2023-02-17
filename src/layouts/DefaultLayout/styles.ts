import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  padding: 2rem 10rem;
  margin: 0 auto;

  background: ${(props) => props.theme['gray-300']};
`;