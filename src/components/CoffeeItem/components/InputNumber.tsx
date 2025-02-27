import { Plus, Minus } from "@phosphor-icons/react";
import { InputNumberConteiner } from "./styles";
import { BaseButton } from "./styles";

interface InputNumberProps {
  itemsCounter?: number;
  handleAddToCart: () => void;
  handleRemoveFromCart: () => void;
}

const InputNumber = ({
  handleAddToCart,
  handleRemoveFromCart,
  itemsCounter,
}: InputNumberProps) => {
  return (
    <>
      <InputNumberConteiner>
        <BaseButton onClick={handleRemoveFromCart}>
          <Minus size={14} weight="bold" />
        </BaseButton>
        <span>{itemsCounter}</span>
        <BaseButton onClick={handleAddToCart}>
          <Plus size={14} weight="bold" />
        </BaseButton>
      </InputNumberConteiner>
    </>
  );
};

export default InputNumber;
