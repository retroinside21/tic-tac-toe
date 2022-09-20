import React, { ReactNode } from "react";
import Styles from "./style.module.scss";

interface ITicTacWrapper {
  children: ReactNode;
}

export const TicTacWrapper: React.FC<ITicTacWrapper> = ({ children }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};
