import {
  InfosConteiner,
  LeftSide,
  RightSide,
  SuccessConteiner,
  Titles,
} from "./styles";
import Image from "../../assets/Illustration.svg";
import InfoItem from "./components/InfoItem";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  if (!params.get("cep")) {
    return (
      <SuccessConteiner>
        <Titles>
          <h1>Nenhum pedido feito!</h1>
        </Titles>
      </SuccessConteiner>
    );
  }

  return (
    <SuccessConteiner>
      <LeftSide>
        <Titles>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Titles>
        <InfosConteiner>
          <InfoItem type="location" />
          <InfoItem type="time" />
          <InfoItem type="payment" />
        </InfosConteiner>
      </LeftSide>

      <RightSide>
        <img src={Image} alt="" />
      </RightSide>
    </SuccessConteiner>
  );
};

export default SuccessPage;
