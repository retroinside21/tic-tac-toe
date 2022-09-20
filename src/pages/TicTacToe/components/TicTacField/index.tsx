import React, { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@app/redux/hooks";
import {
  setAmount,
  setBoard,
  setSquareLine,
  setWinner,
} from "@app/redux/reducers/gameSlice";
import { whosWin } from "@helpers/gamelog";
import { Board } from "types";
import TicTacSquare from "../TicTacSquare";
import useWindowSize from "@helpers/useWindowSizeHook";
import Styles from "./style.module.scss";

export const TicTacField: React.FC = () => {
  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => state?.gameSlice?.amount);
  const squareLine = useAppSelector((state) => state?.gameSlice?.squareLine);
  const board: Board[] = useAppSelector((state) => state?.gameSlice?.board);
  const winner = whosWin(board, squareLine, amount, 4);

  const field = useRef(null);
  const width = useWindowSize();

  const handleClick = useCallback((id: number, index) => {
    dispatch(setBoard({ id, index }));
  }, []);

  useEffect(() => {
    if (winner) {
      dispatch(setWinner(true));
    }
    dispatch(
      setAmount({
        height: field?.current?.clientHeight,
        width: field?.current?.clientWidth,
      })
    );
    dispatch(setSquareLine(field?.current?.clientWidth));
  }, [field, width, winner]);

  return (
    <div ref={field} className={Styles.tictac__field}>
      {board?.map((el: any, i: number) => {
        return (
          <TicTacSquare
            onClick={() => handleClick(el.id, i)}
            value={el.value}
            key={el.id}
          />
        );
      })}
    </div>
  );
};
