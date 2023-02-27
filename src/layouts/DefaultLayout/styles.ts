import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--wideSize);
  margin: 0 auto;
  background: ${(props) => props.theme['white-100']};
`;