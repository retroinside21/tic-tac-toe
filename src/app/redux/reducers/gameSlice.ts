import { createSlice } from "@reduxjs/toolkit";
import { Board, BOARD_VALUE } from "../../../types";

import { v4 as uuidv4 } from "uuid";
import { whosWin } from "@helpers/gamelog";

interface IGameState {
  amount: number;
  squareLine: number;
  play: boolean;
  winner: boolean;
  xFirst: boolean;
  board: Board[];
}

const initialState: IGameState = {
  amount: 0,
  squareLine: 0,
  winner: false,
  board: null,
  play: false,
  xFirst: true,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    setSquareLine(state, { payload }) {
      state.squareLine = Math.floor(payload / 80);
    },
    setAmount(state, { payload }) {
      state.amount =
        Math.floor(payload.height / 80) * Math.floor(payload.width / 80);
    },
    setPlay(state, { payload }) {
      state.play = payload;
    },
    setFirst(state, { payload }) {
      state.xFirst = payload;
    },
    setAmountBoard(state, { payload }) {
      const boardArr: any = [];
      for (let i = 0; i < payload; i++) {
        boardArr.push({ id: uuidv4(), value: null });
      }
      return { ...state, board: boardArr };
    },
    setBoard(state, { payload }) {
      if (payload.index === 0 || state.play) {
        if (
          whosWin(state.board, state.squareLine, state.amount, 4) ||
          state.board[payload.id]
        )
          return;
        return {
          ...state,
          board: [...state.board].map((item) => {
            if (item.id === payload.id) {
              return {
                id: item.id,
                value: state.xFirst ? BOARD_VALUE.x : BOARD_VALUE.o,
              };
            } else {
              return item;
            }
          }),
          xFirst: !state.xFirst,
          play: true,
        };
      }
    },
    setReset(state) {
      const boardArr: any = [];
      for (let i = 0; i < state.amount; i++) {
        boardArr.push({ id: uuidv4(), value: null });
      }
      state.board = [...boardArr]
      state.xFirst = true;
      state.play = false;
      state.winner = false;
    },
    setWinner(state, { payload }) {
      state.winner = payload;
    },
  },
});

export const {
  setAmount,
  setSquareLine,
  setBoard,
  setFirst,
  setPlay,
  setReset,
  setAmountBoard,
  setWinner,
} = gameSlice.actions;

export default gameSlice.reducer;
