import styled from "styled-components";

export const WideHomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 34rem;
  align-items: center;
  justify-content: center;
  width: var(--wideSize);
  background-image: url('src/assets/hero-background.png');
`;

export const ContentHomeContainer = styled.div`
  width: var(--contentSize);
`;