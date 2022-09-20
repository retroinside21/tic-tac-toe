import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/redux/hooks";
import { setAmountBoard } from "@app/redux/reducers/gameSlice";
import { TicTacField } from "./components/TicTacField";
import { TicTacWrapper } from "./components/TicTacWrapper";
import { TicTacWinnerTable } from "./components/TicTacWinnerTable";

export const TicTacToe: React.FC = () => {
  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => state?.gameSlice?.amount);

  useEffect(() => {
    dispatch(setAmountBoard(amount));
  }, [amount]);

  return (
      <TicTacWrapper>
        <TicTacWinnerTable />
        <TicTacField />
      </TicTacWrapper>
  );
};
