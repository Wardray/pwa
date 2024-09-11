import { StrokePanel, Typography } from "../../core/ui/typography/typography";

interface IPropsMassage {
  textPadding?: number;
  onClick?: Function;
  child?: React.ReactNode;
  icon?: React.ReactNode;
}
export const Massage = (props: IPropsMassage) => {
  return (
    <>
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: 50, height: 50, backgroundColor: "grey" }}>1</div>
        <div>
          <Typography
            text="Metal Exchange"
            fontSize={16}
            strokePanel={StrokePanel.Regular}
            color={"#3D3D3D"}
          />
          <Typography
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            fontSize={11}
            strokePanel={StrokePanel.Regular}
            color={"#636363"}
          />
        </div>
        <div>
          <Typography
            text="10 min"
            fontSize={10}
            strokePanel={StrokePanel.Regular}
            color={"#000000"}
          />

          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "4px",
              backgroundColor: "#5A0FC8",
            }}
          ></div>
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
