import { HeroContent } from "./components/Hero";
import { Products } from "./components/Products";
import { WideHomeContainer } from "./styles";

export function Home() {
  return (
    <WideHomeContainer>
      <HeroContent />
      <div className="contentSize">
        <Products />
      </div>
    </WideHomeContainer>
  );
}