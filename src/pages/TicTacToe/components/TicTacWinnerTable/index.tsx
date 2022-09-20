import React from "react";
import { useAppDispatch, useAppSelector } from "@app/redux/hooks";
import { setReset } from "@app/redux/reducers/gameSlice";
import Styles from "./style.module.scss";

export const TicTacWinnerTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const xFirst = useAppSelector((state) => state?.gameSlice?.xFirst);
  const winner = useAppSelector((state) => state?.gameSlice?.winner);

  return (
    <div className={Styles.table}>
      <div className={Styles.table__description}>
        {winner ? (
          <div> Ура победил : {!xFirst ? "X" : "0"} </div>
        ) : (
          <div> Сейчас ходит : {xFirst ? "X" : "0"}</div>
        )}
      </div>
      <button
        className={Styles.table__btn}
        onClick={() => dispatch(setReset())}
      >
        Новая Игра
      </button>
    </div>
  );
};
