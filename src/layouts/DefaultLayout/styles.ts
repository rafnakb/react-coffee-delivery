import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: block;
  max-width: var(--wideSize);
  margin: 0 auto;
  background: ${(props) => props.theme['white-100']};
`;