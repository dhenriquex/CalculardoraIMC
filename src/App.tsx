import { useState } from "react";
import style from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";
import leftArrowImage from "./assets/leftarrow.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const CalculeteButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos");
    }
  };
  const backButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);  
  }
  return (
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={poweredImage} alt="" />
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>
            Imc e a sigla para indice de massa corporea, adotado pela
            Organização mundial de saude para calucalr opeso ideal para cada
            pessoa
          </p>
          <input
            type="number"
            placeholder="Digite sua altura. Ex 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite seu peso. Ex 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={CalculeteButton}>Calcular</button>
        </div>
        <div className={style.rigthSide}>
          {!toShow && (
            <div className={style.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={style.rightBig}>
              <div className={style.rightArrow} onClick={backButton}>
                <img src={leftArrowImage} alt=""  width={25}/>
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
