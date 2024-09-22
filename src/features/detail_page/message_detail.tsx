import React from "react";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";

interface IPropsMessageDetail {
  text: string;
  time: string;
}
export const LeftMessages = (props: IPropsMessageDetail) => (
  <div
    style={{
      marginLeft: 30,
      height: 82,
      marginTop: 10,
      display: "flex",
      width: 357,
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div
      style={{
        marginRight: 10,
        width: 50,
        height: 50,
        backgroundColor: " black",
        borderRadius: 50,
      }}
    ></div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 295,
          borderRadius: "30px 30px 30px 0px",
          background: "#DECFF4",

          minHeight: 20,
          maxHeight: "calc(100vh - 70px)",
        }}
      >
        <Typography
          style={{ marginLeft: 10, marginTop: 10, marginBottom: 4 }}
          fontSize={12}
          strokePanel={StrokePanel.Regular}
          color={"white"}
          text={props.text}
        />
      </div>
      <Typography
        fontSize={7}
        strokePanel={StrokePanel.Regular}
        color={"black"}
        text={props.time}
      />
    </div>
  </div>
);

export const RightMessages = (props: IPropsMessageDetail) => (
  <div
    style={{
      marginLeft: 30,
      height: 82,
      marginTop: 10,
      display: "flex",
      width: 357,
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: 295,
          borderRadius: "30px 30px 0px 30px",
          backgroundColor: "#AD87E4",
          minHeight: 20,
          maxHeight: "calc(100vh - 70px)",
        }}
      >
        <Typography
          style={{ marginLeft: 10, marginTop: 3 }}
          fontSize={12}
          strokePanel={StrokePanel.Regular}
          color={"white"}
          text={props.text}
        />
      </div>
      <Typography
        fontSize={7}
        strokePanel={StrokePanel.Regular}
        color={"black"}
        text={props.time}
      />
    </div>

    <div
      style={{
        marginLeft: 10,
        width: 50,
        height: 50,
        backgroundColor: " black",
        borderRadius: 50,
      }}
    ></div>
  </div>
);
// export const MessageDetail = (props: IPropsMessageDetail) => {
//   return (
//     <div
//       style={{

//         backgroundColor: props.side === "left" ? "#f0f0f0" : "#e0e0e0",
//         alignSelf: props.side === "left" ? "flex-start" : "flex-end",
//       }}
//     >
//       <Typography
//         text={props.message}
//         fontSize={14}
//         strokePanel={StrokePanel.Regular}
//         color={"black"}
//       />
//     </div>
//   );
// };
