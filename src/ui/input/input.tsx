import { relative } from "path";
import { StrokePanel, Typography } from "../typography/typography";

interface IInputProps {
  label?: string;
  initialValue: string;
}
export const Input = (props: IInputProps) => {
  return (
    <>
      <div style={{ position: "absolute" }}>
        <Typography
          style={{
            left: 10,
            top: -26,
            position: "relative",
            backgroundColor: "white",
            paddingRight: 5,
            paddingLeft: 5,
          }}
          text={props.label}
          fontSize={14}
          strokePanel={StrokePanel.Regular}
          color={"black"}
        />
      </div>
      <Typography
        contentEditable={true}
        fontSize={14}
        strokePanel={StrokePanel.Regular}
        color={"black"}
        text={props.initialValue}
        style={{
          display: "flex",
          alignItems: "center",
          height: 50,
          background: "#FFFFFF",
          width: 250,
          paddingLeft: 5,
        }}
      />
    </>
  );
};
