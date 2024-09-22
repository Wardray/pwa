import { Button } from "../../core/ui/button/button";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";

interface IPropsContact {
  textPadding?: number;
  onClick?: Function;
  child?: React.ReactNode;
  icon?: React.ReactNode;
}
export const Contact = (props: IPropsContact) => {
  return (
    <>
      <div
        onClick={() =>
          props.onClick === undefined ? undefined : props.onClick()
        }
        style={{
          alignItems: "center",
          height: 97,
          marginLeft: 10,
          marginRight: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
            backgroundColor: "grey",
          }}
        >
          {" "}
        </div>
        <div>
          <Typography
            text="Metal Exchange"
            fontSize={16}
            strokePanel={StrokePanel.Regular}
            color={"#3D3D3D"}
          />
          <Typography
            text="+43 123-456-7890,"
            fontSize={11}
            strokePanel={StrokePanel.Regular}
            color={"#636363"}
          />
        </div>
        <div>
          <Button
            background={"#5A0FC8"}
            width={54}
            height={24}
            text={"+ Add"}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: 5,
          marginLeft: 10,
          width: 383,
          height: 1,
          backgroundColor: "#BD9FE9",
        }}
      ></div>
    </>
  );
};
