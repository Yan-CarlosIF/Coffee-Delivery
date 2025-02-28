import { HomeContainer, Itens, LeftSide, Texts } from "./styles";
import Item from "../../components/Item";
import Coffee from "../../assets/coffee.svg";
import background from "../../assets/Background.svg";
import CoffeeList from "./components/CoffeeList";

function Home() {
  return (
    <>
      <HomeContainer background={background}>
        <LeftSide>
          <Texts>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Texts>
          <Itens>
            <Item content="Compra simples e segura" icon="shoppingCart" />
            <Item content="Embalagem mantém o café intacto" icon="package" />
            <Item content="Entrega rápida e rastreada" icon="timer" />
            <Item content="O café chega fresquinho até você" icon="coffee" />
          </Itens>
        </LeftSide>
        <img src={Coffee} alt="" />
      </HomeContainer>

      <CoffeeList />
    </>
  );
}

export default Home;
