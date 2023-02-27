import {
  HeroContainer,
  TitleContainer,
  Icon,
  IconTitleContainer,
  LeftHeroContainer,
  ItemsContainer,
  HeroContentContainer
} from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function HeroContent() {
  return (
    <HeroContainer>
      <HeroContentContainer>
        <LeftHeroContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h3>
          </TitleContainer>

          <ItemsContainer>
            <div>
              <IconTitleContainer>
                <Icon iconColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </Icon>
                Compra simples e segura
              </IconTitleContainer>

              <IconTitleContainer>
                <Icon iconColor="yellow">
                  <Timer size={16} weight="fill" />
                </Icon>
                Entrega rápida e rastreada
              </IconTitleContainer>
            </div>
            <div>
              <IconTitleContainer>
                <Icon iconColor="grayBase">
                  <Package size={16} weight="fill" />
                </Icon>
                Embalagem mantém o café intacto
              </IconTitleContainer>

              <IconTitleContainer>
                <Icon iconColor="purple">
                  <Coffee size={16} weight="fill" />
                </Icon>
                O café chega fresquinho até você
              </IconTitleContainer>
            </div>
          </ItemsContainer>
        </LeftHeroContainer>

        <img src="src/assets/hero-coffee.svg" alt="" />
      </HeroContentContainer>
    </HeroContainer>
  );
}