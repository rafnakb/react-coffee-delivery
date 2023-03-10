import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { HeroContent } from "./components/Hero";
import { Products } from "./components/Products";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeroContent />
      <Products />
    </HomeContainer>
  );
}