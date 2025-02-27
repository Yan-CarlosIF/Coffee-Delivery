import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import {
  PaymentButton,
  PaymentButtonContainer,
  PaymentContainer,
  PaymentMethodsContainer,
  PaymentTitle,
} from "./styles";
import { useContext } from "react";
import { CartCoffeesListContext } from "../../../../context/cartProductsList";
import { UseFormSetValue } from "react-hook-form";
import { formSchema } from "../..";

interface PaymentButtonProps {
  setValue: UseFormSetValue<formSchema>;
}

const PaymentCard = ({ setValue }: PaymentButtonProps) => {
  const { paymentMethod, setPaymentMethod } = useContext(
    CartCoffeesListContext
  );

  const handleButtonClick = (method: string) => {
    setPaymentMethod(method);
    setValue("paymentMethod", method);
  };

  return (
    <PaymentContainer>
      <PaymentTitle>
        <CurrencyDollar width={22} height={22} weight="regular" />
        <div className="texts">
          <h4>Pagamento</h4>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentTitle>
      <PaymentMethodsContainer>
        <PaymentButtonContainer
          ispressed={paymentMethod === "Cartão de Crédito"}
        >
          <PaymentButton
            type="button"
            onClick={() => handleButtonClick("Cartão de Crédito")}
            ispressed={paymentMethod === "Cartão de Crédito"}
          >
            <CreditCard size={16} weight="regular" />
            CARTÃO DE CREDITO
          </PaymentButton>
        </PaymentButtonContainer>
        <PaymentButtonContainer
          ispressed={paymentMethod === "Cartão de Débito"}
        >
          <PaymentButton
            type="button"
            onClick={() => handleButtonClick("Cartão de Débito")}
            ispressed={paymentMethod == "Cartão de Débito"}
          >
            <Bank size={16} weight="regular" />
            CARTÃO DE DEBITO
          </PaymentButton>
        </PaymentButtonContainer>
        <PaymentButtonContainer ispressed={paymentMethod === "Pix"}>
          <PaymentButton
            type="button"
            onClick={() => handleButtonClick("Pix")}
            ispressed={paymentMethod === "Pix"}
          >
            <Money size={16} weight="regular" />
            PIX
          </PaymentButton>
        </PaymentButtonContainer>
      </PaymentMethodsContainer>
    </PaymentContainer>
  );
};

export default PaymentCard;
