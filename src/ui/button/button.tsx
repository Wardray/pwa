import React from "react";
import { StrokePanel, Typography } from "../typography/typography";
import { Icon } from "../icon/icon";

interface IPropsButton {
  background: string;
  width: number;
  height: number;
  text: string;
  textPadding?: number;
  onClick?: Function;
  child?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = (props: IPropsButton) => {
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      style={{
        borderRadius: 12,
        width: props.width,
        height: props.height,
        background: props.background,
        placeContent: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {props.icon}
      <Typography
        style={{ paddingLeft: props.textPadding }}
        fontSize={14}
        strokePanel={StrokePanel.Regular}
        color={"white"}
        text={props.text}
      />
      {props.child}
    </div>
  );
};
