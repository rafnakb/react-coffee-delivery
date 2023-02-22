import { HeroContent } from "./components/Hero";
import { Products } from "./components/Products";
import { WideHomeContainer, ContentHomeContainer } from "./styles";

export function Home() {
  return (
    <WideHomeContainer>
        <HeroContent />
      <ContentHomeContainer>
        <Products />
      </ContentHomeContainer>
    </WideHomeContainer>
  );
}