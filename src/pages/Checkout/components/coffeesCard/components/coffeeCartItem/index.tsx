import { useContext, useState } from "react";
import {
  CartCoffee,
  CartCoffeesListContext,
} from "../../../../../../context/cartProductsList";
// import { COFFEE_PRICE } from "../../../../helpers/formatMoney";
import {
  BaseButton,
  CoffeeCartItemContainer,
  InputNumberConteiner,
  ActionsContainer,
  RemoveButton,
  InfosConteiner,
} from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  COFFEE_PRICE,
  formatMoney,
} from "../../../../../../helpers/formatMoney";

interface CoffeeCartItemProps {
  coffee: CartCoffee;
}

function CoffeeCartItem({ coffee }: CoffeeCartItemProps) {
  const { setCart } = useContext(CartCoffeesListContext);
  const [itemsCounter, setItemsCounter] = useState<number>(coffee.quantity);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      if (prevCart.find((c) => c.name === coffee.name)) {
        return prevCart.map((c) => {
          if (c.name === coffee.name) {
            return {
              ...c,
              quantity: c.quantity + 1,
            };
          }
          return c;
        });
      } else {
        return [...prevCart, coffee];
      }
    });

    setItemsCounter(itemsCounter + 1);
  };

  const handleRemoveFromCart = () => {
    setCart((prevCart) => {
      return prevCart.map((c) => {
        if (c.name === coffee.name) {
          if (c.quantity - 1 !== 0) {
            setItemsCounter(itemsCounter - 1);
            return {
              ...c,
              quantity: c.quantity - 1,
            };
          }
        }
        return c;
      });
    });
  };

  const handleDeleteFromCart = () => {
    setCart((prevCart) => prevCart.filter((c) => c.name !== coffee.name));
  };

  return (
    <CoffeeCartItemContainer>
      <img src={coffee.img} alt="" />
      <InfosConteiner>
        <p>{coffee.name}</p>
        <ActionsContainer>
          <InputNumberConteiner>
            <BaseButton onClick={handleRemoveFromCart}>
              <Minus size={14} weight="bold"/>
            </BaseButton>
            <span>{itemsCounter}</span>
            <BaseButton onClick={handleAddToCart}>
              <Plus size={14} weight="bold" />
            </BaseButton>
          </InputNumberConteiner>
          <RemoveButton onClick={handleDeleteFromCart}>
            <Trash size={16} weight="regular" />
            REMOVER
          </RemoveButton>
        </ActionsContainer>
      </InfosConteiner>
      <div className="price">
        <span>R$ {formatMoney(COFFEE_PRICE)}</span>
      </div>
    </CoffeeCartItemContainer>
  );
}

export default CoffeeCartItem;
