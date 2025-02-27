import {
  IconProps,
  IconWeight,
  MapPin,
  Timer,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { Info } from "./styles";
import { JSX } from "react";
import { useLocation } from "react-router-dom";

interface InfoItemProps {
  type: "location" | "time" | "payment";
}

const InfoItem = ({ type }: InfoItemProps) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const propsIcon: IconProps = {
    size: 16,
    weight: type === "payment" ? "regular" : ("fill" as IconWeight),
    color: "#fff",
  };

  let contentTitle: JSX.Element = <span></span>;
  let contentSubtitle: JSX.Element = <span></span>;

  console.log(location);

  if (type === "location") {
    contentTitle = (
      <span>
        Entrega em{" "}
        <strong>
          {params.get("rua")}, {params.get("numero")}
        </strong>
      </span>
    );
    contentSubtitle = (
      <span>
        {params.get("bairro")} - {params.get("cidade")}, {params.get("uf")}{" "}
      </span>
    );
  }

  if (type === "payment") {
    contentTitle = <span>Pagamento na entrega</span>;
    contentSubtitle = (
      <span>
        <strong>{params.get("paymentMethod")}</strong>
      </span>
    );
  }

  if (type === "time") {
    contentTitle = <span>Previsão de entrega</span>;
    contentSubtitle = (
      <span>
        <strong>20 min - 30 min</strong>
      </span>
    );
  }

  return (
    <Info type={type}>
      <div className="icon">
        {type === "location" ? (
          <MapPin {...propsIcon} />
        ) : type === "time" ? (
          <Timer {...propsIcon} />
        ) : (
          <CurrencyDollar {...propsIcon} />
        )}
      </div>
      <div className="infos">
        {contentTitle}
        <span>{contentSubtitle}</span>
      </div>
    </Info>
  );
};

export default InfoItem;
