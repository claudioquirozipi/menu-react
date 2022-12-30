import { Card } from "primereact/card";
import { CardMenuProps } from "./interfaces/props";

import "./style.css";

export default function CardMenu(props: CardMenuProps) {
  const { menu } = props;
  return (
    <Card
      title={menu.name}
      header={
        <img className="img" src={menu.image[0].url} alt={menu.image[0].alt} />
      }
    />
  );
}
