import { ShoppingCart } from "@phosphor-icons/react";
import InputNumber from "./components/InputNumber";
import { CoffeeConteiner, PriceConteiner, TypeConteiner } from "./styles";
import { useContext, useState } from "react";
import { CartButton } from "./styles";
import { COFFEE_PRICE, formatMoney } from "../../helpers/formatMoney";
import { CartCoffeesListContext } from "../../context/cartProductsList";
import { Link } from "react-router-dom";

export interface CoffeeItemProps {
  img: string;
  name: string;
  description: string;
  tradicional?: boolean;
  comLeite?: boolean;
  especial?: boolean;
  alcoolic?: boolean;
  gelado?: boolean;
}

const CoffeeItem = ({
  img,
  name,
  description,
  tradicional,
  comLeite,
  especial,
  alcoolic,
  gelado,
}: CoffeeItemProps) => {
  const [itemsCounter, setItemsCounter] = useState<number>(0);
  const { setCart } = useContext(CartCoffeesListContext);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      if (prevCart.find((coffee) => coffee.name === name)) {
        return prevCart.map((coffee) => {
          if (coffee.name === name) {
            return {
              ...coffee,
              quantity: itemsCounter + 1,
            };
          }
          return coffee;
        });
      } else {
        return [...prevCart, { img, name, quantity: itemsCounter + 1 }];
      }
    });
    setItemsCounter(itemsCounter + 1);
  };

  const handleRemoveFromCart = () => {
    setCart((prevCart) => {
      const coffee = prevCart.find((coffee) => coffee.name === name);

      if (coffee) {
        if (itemsCounter - 1 === 0) {
          return prevCart.filter((coffee) => coffee.name !== name);
        } else {
          return prevCart.map((coffee) => {
            if (coffee.name === name) {
              return {
                ...coffee,
                quantity: itemsCounter - 1,
              };
            }
            return coffee;
          });
        }
      } else {
        return prevCart;
      }
    });

    if (itemsCounter > 0) {
      setItemsCounter(itemsCounter - 1);
    }
  };

  const hasItems = itemsCounter > 0;

  return (
    <CoffeeConteiner>
      <img src={img} alt="Foto do café" />
      <TypeConteiner>
        {tradicional ? <span>Tradicional</span> : null}
        {especial ? <span>Especial</span> : null}
        {comLeite ? <span>Com Leite</span> : null}
        {alcoolic ? <span>Alcoólico</span> : null}
        {gelado ? <span>Gelado</span> : null}
      </TypeConteiner>
      <h3>{name}</h3>
      <div className="description">
        <span>{description}</span>
      </div>
      <PriceConteiner>
        <div className="price">
          <span>
            R$ <h1>{formatMoney(COFFEE_PRICE)}</h1>
          </span>
        </div>

        <InputNumber
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          itemsCounter={itemsCounter}
        />
        <CartButton
          as={Link}
          style={{ backgroundColor: hasItems ? "#4B2995" : "#8047F8" }}
          to={"/checkout"}
          hasItems={hasItems}
        >
          <button disabled={!hasItems}>
            <ShoppingCart size={18} weight="fill" color="#fff" />
          </button>
        </CartButton>
      </PriceConteiner>
    </CoffeeConteiner>
  );
};

export default CoffeeItem;
