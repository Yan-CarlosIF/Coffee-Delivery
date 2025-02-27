import CoffeeItem from "../../../../components/CoffeeItem";
import { CoffeeListConteiner, Conteiner } from "./styles";
import * as Coffes from "./coffes.d";

const CoffeeList = () => {
  return (
    <Conteiner>
      <h1 className="title">Nossos Cafés</h1>
      <CoffeeListConteiner>
        <CoffeeItem
          img={Coffes.Tradicional}
          name="Expresso Tradicional"
          description={Coffes.descriptions[0]}
          tradicional
        />
        <CoffeeItem
          img={Coffes.Americano}
          name="Expresso Americano"
          description={Coffes.descriptions[1]}
          tradicional
        />
        <CoffeeItem
          img={Coffes.Cremeso}
          name="Expresso Cremoso"
          description={Coffes.descriptions[2]}
          tradicional
        />
        <CoffeeItem
          img={Coffes.Gelado}
          name="Expresso Gelado"
          description={Coffes.descriptions[3]}
          tradicional
          gelado
        />
        <CoffeeItem
          img={Coffes.ComLeite}
          name="Café Com Leite"
          description={Coffes.descriptions[4]}
          tradicional
          comLeite
        />
        <CoffeeItem
          img={Coffes.Latte}
          name="Latte"
          description={Coffes.descriptions[5]}
          tradicional
          comLeite
        />
        <CoffeeItem
          img={Coffes.Capuccino}
          name="Capuccino"
          description={Coffes.descriptions[6]}
          tradicional
          comLeite
        />
        <CoffeeItem
          img={Coffes.Macchiato}
          name="Macchiato"
          description={Coffes.descriptions[7]}
          tradicional
          comLeite
        />
        <CoffeeItem
          img={Coffes.Mochaccino}
          name="Mochaccino"
          description={Coffes.descriptions[8]}
          tradicional
          comLeite
        />
        <CoffeeItem
          img={Coffes.ChocolateQuente}
          name="Chocolate Quente"
          description={Coffes.descriptions[9]}
          especial
          comLeite
        />
        <CoffeeItem
          img={Coffes.Cubano}
          name="Cubano"
          description={Coffes.descriptions[10]}
          especial
          alcoolic
          gelado
        />
        <CoffeeItem
          img={Coffes.Havaiano}
          name="Havaiano"
          description={Coffes.descriptions[11]}
          especial
        />
        <CoffeeItem
          img={Coffes.Arabe}
          name="Árabe"
          description={Coffes.descriptions[12]}
          especial
        />
        <CoffeeItem
          img={Coffes.Irlandes}
          name="Irlandês"
          description={Coffes.descriptions[13]}
          especial
          alcoolic
        />
      </CoffeeListConteiner>
    </Conteiner>
  );
};

export default CoffeeList;
