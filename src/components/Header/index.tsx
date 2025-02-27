import {
  Actions,
  CartButton,
  CartQuantity,
  HeaderConteiner,
  LocationButton,
} from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { useState, useEffect, useContext } from "react";
import { CartCoffeesListContext } from "../../context/cartProductsList";
import { Link } from "react-router-dom";

function Header() {
  const [location, setLocation] = useState<string>("Localização");
  const { cart, setCart } = useContext(CartCoffeesListContext);

  const TotalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    fetch("https://ipwhois.app/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocation(`${data.city}, ${data.country_code}`);
      })
      .catch((error) => console.error("Erro ao obter localização:", error));
  }, []);

  return (
    <HeaderConteiner>
      <Link to="/" onClick={() => setCart([])}>
        <img src={Logo} alt="Logo Coffee Delivery" />
      </Link>
      <Actions>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>{location}</span>
        </LocationButton>

        <CartButton
          as={cart.length > 0 ? Link : "button"}
          disabled={cart.length === 0}
          quantity={TotalProducts}
          to="/checkout"
        >
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
        <CartQuantity quantity={TotalProducts}>
          {TotalProducts > 0 && <span>{TotalProducts}</span>}
        </CartQuantity>
      </Actions>
    </HeaderConteiner>
  );
}

export default Header;
