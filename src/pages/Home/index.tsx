import { HeroContent } from "./components/Hero";
import { WideHomeContainer, ContentHomeContainer } from "./styles";

export function Home() {
  return (
    <WideHomeContainer>
      <ContentHomeContainer>
        <HeroContent />
      </ContentHomeContainer>
    </WideHomeContainer>
  );
}