import { observer } from "mobx-react-lite";
import { Icon } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { useEffect, useRef, useState } from "react";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { Message } from "../contact_list_page/message";
import { LeftMessages, RightMessages } from "./message_detail";

export const DetailPagePath = "/detailPage";
export const DetailPageScreen = observer(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [detailPageBackgroundHeight, setDetailPageBackgroundHeight] =
    useState<string>("100%");
  useEffect(() => {
    const clientHeight = ref.current?.clientHeight;
    if (clientHeight) {
      setDetailPageBackgroundHeight(`${clientHeight}px`);
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 116,
          backgroundColor: "purple",
        }}
      >
        <div
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Icon icon={"BackIcon"} />
          <div style={{ marginRight: 30 }}>
            <Typography
              text={"Michael tony"}
              fontSize={22}
              strokePanel={StrokePanel.Regular}
              color={"white"}
            />
            <Typography
              text={"+43 123-456-7890"}
              fontSize={16}
              strokePanel={StrokePanel.Regular}
              color={"white"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Icon icon={"BellIcon"} />
            <Icon icon={"3DotsIcon"} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          height: "calc(100% - 70px)",
          top: 70,
          borderRadius: "40px 40px 0px 0px",
        }}
      >
        <div
          ref={ref}
          style={{
            width: "100%",
            height: detailPageBackgroundHeight,
            backgroundColor: "white",
            overflow: "scroll",
            borderRadius: "40px 40px 0px 0px",
          }}
        >
          {/* {[""].repeat(19).map((el) => (
            <div style={{ width: "100%", height: 50 }}>
              {<MessageDetail side={"right"} message={"123"} />}
            </div>
          ))} */}
          <RightMessages
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
            time={"10:10 AM"}
          />
          <LeftMessages
            text={
              "sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui."
            }
            time={"10:11 AM"}
          />
          <RightMessages text={"Lorem ipsum dolor sit  "} time={"10:14 AM"} />

          <LeftMessages
            text={
              "sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,."
            }
            time={"10:14 AM"}
          />
          <RightMessages
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
            time={"10:15 AM"}
          />
          <LeftMessages
            text={"sed do eiusmod tempor incididunt ut labore et "}
            time={"6:30 PM"}
          />
          <RightMessages
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
            time={"6:32 PM"}
          />
          <LeftMessages
            text={"sed do eiusmod tempor incididunt ut labore et "}
            time={"6:33 PM"}
          />

          <RightMessages
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            }
            time={"10:10 AM"}
          />
          <LeftMessages
            text={
              "sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui."
            }
            time={"10:11 AM"}
          />
          <RightMessages text={"Lorem ipsum dolor sit  "} time={"10:14 AM"} />

          <LeftMessages
            text={
              "sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,."
            }
            time={"10:14 AM"}
          />
          <RightMessages
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
            time={"10:15 AM"}
          />
          <LeftMessages
            text={"sed do eiusmod tempor incididunt ut labore et "}
            time={"6:30 PM"}
          />
          <RightMessages
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing "}
            time={"6:32 PM"}
          />
          <LeftMessages
            text={"sed do eiusmod tempor incididunt ut labore et "}
            time={"6:33 PM"}
          />
          <RightMessages text={"ok "} time={"6:35 PM"} />
        </div>

        <div
          style={{
            boxShadow: "0 0 5px #555",
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: "white",
            width: 328,
            height: 56,
            marginLeft: 40,
            marginRight: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 28,
          }}
        >
          <Icon
            style={{ marginTop: 3, marginLeft: 4 }}
            icon={"SmileFaceIcon"}
          />
          <Input
            style={{ marginTop: 3 }}
            initialValue={"Type message here..."}
          />
          <Icon style={{ marginTop: 3, marginRight: 4 }} icon={"PlaneIcon"} />
        </div>
      </div>
    </div>
  );
});
