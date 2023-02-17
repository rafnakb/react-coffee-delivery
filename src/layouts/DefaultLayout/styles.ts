import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--wideSize);
  padding: 2rem 0;
  margin: 0 auto;
  background: ${(props) => props.theme['white-100']};
`;