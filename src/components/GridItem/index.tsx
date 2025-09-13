import { Level } from "../../helpers/imc";
import style from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={style.main} style={{ backgroundColor: item.color }}>
      <div className={style.gridIcon}>
        <img src={item.icon === "up" ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={style.gridTitle}>{item.title}</div>
      <div className={style.gridInfo}>
        {item.yourIMC && <div className={style.yourImc}>Seu IMC e de {item.yourIMC} kg/m²</div>}
        <>{`IMC entre ${item.imc[0]} e ${item.imc[1]}`}</>
      </div>
    </div>
  );
};
