import { Board } from "types";

export const whosWin = (
  squares: Board[],
  amountSquare: number,
  amount: number,
  move: number = 4
) => {
  const newLines = [];

  for (let i = 0; i < amount; i++) {
    newLines.push(lineHorizontal(i, move));
    newLines.push(lineVertical(i, move, amountSquare));
    newLines.push(inclineRight(i, move, amountSquare));
    newLines.push(inclineLeft(i, move, amountSquare));
  }
  for (let i = 0; i < newLines.length; i++) {
    const [a, b, c, d] = newLines[i];
    if (
      squares[a]?.value &&
      squares[a]?.value === squares[b]?.value &&
      squares[a]?.value === squares[c]?.value &&
      squares[a]?.value === squares[d]?.value
    ) {
      return true;
    }
  }
  return null;
};

export const lineHorizontal = (index: number, numerator: number) => {
  let result = [];
  let i = 0;
  while (numerator > i) {
    result.push(index + i);
    i++;
  }
  return result;
};

export const lineVertical = (
  index: number,
  numerator: number,
  amountSquare: number
) => {
  let result = [];
  let i = 0;
  while (numerator > i) {
    result.push(index + amountSquare * i);
    i++;
  }
  return result;
};

export const inclineLeft = (
  index: number,
  numerator: number,
  amountSquare: number
) => {
  let result = [];
  let i = 0;
  while (numerator > i) {
    result.push(index + (amountSquare - 1) * i);
    i++;
  }
  return result;
};

export const inclineRight = (
  index: number,
  numerator: number,
  amountSquare: number
) => {
  let result = [];
  let i = 0;
  while (numerator > i) {
    result.push(index + (amountSquare + 1) * i);
    i++;
  }
  return result;
};
