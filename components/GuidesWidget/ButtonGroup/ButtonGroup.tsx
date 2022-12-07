import { FC, MouseEventHandler, useState } from "react";
import { Button } from "../Button";

import styles from "./ButtonGroup.module.scss";

interface ButtonGroupProps {
  buttonNames: string[];
  onClick: MouseEventHandler;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ buttonNames, onClick }) => {
  const [activeButton, setActiveButton] = useState(buttonNames[1]);
  const clickHandler: MouseEventHandler = (event) => {
    const input = event.target as HTMLDivElement;
    onClick(event);
    setActiveButton(input.innerText);
  };
  return (
    <div className={styles.buttonGroup} onClick={clickHandler}>
      {buttonNames.map((text, idx) => (
        <Button key={idx} selected={text === activeButton} text={text} />
      ))}
    </div>
  );
};
