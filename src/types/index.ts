export type Board = {
  id: string;
  value: null | BOARD_VALUE;
};

export enum BOARD_VALUE {
    x = 'X',
    o = 'O'
}
