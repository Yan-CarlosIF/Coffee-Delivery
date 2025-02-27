import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import { ItemConteiner } from "./styles";

const ICONS = {
  shoppingCart: {
    icon: <ShoppingCart size={16} weight="fill" />,
    color: "#C47F17",
  },
  timer: {
    icon: <Timer size={16} weight="fill" />,
    color: "#DBAC2C",
  },
  package: {
    icon: <Package size={16} weight="fill" />,
    color: "#574F4D",
  },
  coffee: {
    icon: <Coffee size={16} weight="fill" />,
    color: "#8047F8",
  },
} as const;

interface ItemProps {
  content: string;
  icon: keyof typeof ICONS;
}

function Item({ content, icon }: ItemProps) {
  return (
    <ItemConteiner color={ICONS[icon].color}>
      <div>{ICONS[icon].icon}</div>
      <span>{content}</span>
    </ItemConteiner>
  );
}

export default Item;
