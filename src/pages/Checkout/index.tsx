import {
  CheckoutContainer,
  CheckoutCard,
  FormConteiner,
  FormInputConteiner,
  FormTitle,
  CepInput,
  BaseInput,
  InputContainer,
  GrowInput,
  ShrinkInput,
  TitlesConteiner,
} from "./styles";
import { CartCoffeesListContext } from "../../context/cartProductsList";
import { useContext, useRef } from "react";
import CoffeesCardForm from "./components/coffeesCard";
import { MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import PaymentCard from "./components/paymentCard";

export interface formSchema {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: string;
}

function Checkout() {
  const { cart, paymentMethod } = useContext(CartCoffeesListContext);
  const { register, setValue, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      paymentMethod: "",
    },
  });

  const form = useRef<HTMLFormElement>(null);

  if (cart.length === 0) {
    return (
      <CheckoutContainer>
        <h1 style={{ marginTop: "200px" }}>Seu carrinho está vazio!</h1>
      </CheckoutContainer>
    );
  }

  const onSubmit = (data: formSchema) => {
    console.log(data);
  };

  return (
    <CheckoutContainer>
      <TitlesConteiner>
        <h3 className="left">Complete seu pedido</h3>
        <h3 className="right">Cafés selecionados</h3>
      </TitlesConteiner>

      <CheckoutCard>
        <FormConteiner
          ref={form}
          action="submit"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInputConteiner>
            <FormTitle>
              <MapPinLine size={22} weight="regular" />
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FormTitle>
            <CepInput
              type="number"
              placeholder="CEP"
              required
              {...register("cep", {
                required: "CEP obrigatorio",
                minLength: { value: 8, message: "CEP inválido" },
                maxLength: { value: 8, message: "CEP inválido" },
              })}
              onChange={(e) => {
                const value = e.target.value.slice(0, 8);
                setValue("cep", value);
              }}
            />
            <BaseInput
              type="text"
              placeholder="Rua"
              {...register("rua", { required: "Rua obrigatorio" })}
            />
            <InputContainer>
              <BaseInput
                type="number"
                placeholder="Número"
                {...register("numero", { required: "Número obrigatório" })}
              />
              <GrowInput type="text" placeholder="Complemento" />
            </InputContainer>
            <InputContainer>
              <BaseInput
                type="text"
                placeholder="Bairro"
                required
                {...register("bairro", { required: "Bairro obrigatorio" })}
              />
              <GrowInput
                type="text"
                placeholder="Cidade"
                required
                {...register("cidade", { required: "Cidade obrigatorio" })}
              />
              <ShrinkInput
                type="text"
                placeholder="UF"
                required
                max="2"
                min="2"
                {...register("uf", {
                  required: "UF obrigatorio",
                  maxLength: 2,
                  minLength: 2,
                })}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 2);
                  setValue("uf", value);
                }}
              />
            </InputContainer>
          </FormInputConteiner>

          <input type="hidden" {...register("paymentMethod")} />
          <PaymentCard setValue={setValue} />
        </FormConteiner>

        <CoffeesCardForm
          form={form}
          isFormValid={formState.isValid && paymentMethod !== ""}
        />
      </CheckoutCard>
    </CheckoutContainer>
  );
}

export default Checkout;
