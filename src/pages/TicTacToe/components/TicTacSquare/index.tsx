import React from "react";
import Styles from "./style.module.scss";

interface ITicTacSquare {
  value: string[];
  onClick?: () => void;
}
const moviePropsAreEqual = (prevValue: any, nextValue: any) => {
  return prevValue.value === nextValue.value;
};

const TicTacSquare: React.FC<ITicTacSquare> = ({ value, onClick }) => {
  console.log('Проверка отрисовки квадратика')
  return (
    <button
      onClick={onClick}
      className={Styles.tictac__square}
    >
      {value}
    </button>
  );
};


export default React.memo(TicTacSquare, moviePropsAreEqual);
