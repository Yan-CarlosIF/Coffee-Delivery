import { RefObject, useContext } from "react";
import {
  CartCoffee,
  CartCoffeesListContext,
} from "../../../../context/cartProductsList";
import CoffeeCartItem from "./components/coffeeCartItem";
import {
  CoffeesCard,
  ConfirmationButton,
  InformationConteiner,
  SummaryConteiner,
} from "./styles";
import {
  COFFEE_PRICE,
  formatMoney,
  SHIPPING_PRICE,
} from "../../../../helpers/formatMoney";
// import { formSchema } from "../..";
// import { UseFormSetValue } from "react-hook-form";

interface CoffeesCardProps {
  form: RefObject<HTMLFormElement | null>;
  isFormValid: boolean;
}

const CoffeesCardForm = ({ form, isFormValid }: CoffeesCardProps) => {
  const { cart } = useContext(CartCoffeesListContext);

  const total = cart.reduce((total, product) => {
    return total + product.quantity * COFFEE_PRICE;
  }, 0);

  const handleFormSubmit = () => {
    form?.current?.submit();
  };

  return (
    <CoffeesCard>
      {cart.map((coffee: CartCoffee) => (
        <CoffeeCartItem key={coffee.name} coffee={coffee} />
      ))}
      <SummaryConteiner>
        <InformationConteiner>
          <span>Total de itens</span>
          <span className="price">R$ {formatMoney(total)}</span>
        </InformationConteiner>
        <InformationConteiner>
          <span>Entrega</span>
          <span className="price">R$ {formatMoney(SHIPPING_PRICE)}</span>
        </InformationConteiner>
        <InformationConteiner>
          <h4>Total</h4>
          <h4>R$ {formatMoney(total + SHIPPING_PRICE)}</h4>
        </InformationConteiner>
        <ConfirmationButton
          type="button"
          disabled={!isFormValid}
          onClick={handleFormSubmit}
        >
          CONFIRMAR PEDIDO
        </ConfirmationButton>
      </SummaryConteiner>
    </CoffeesCard>
  );
};

export default CoffeesCardForm;
