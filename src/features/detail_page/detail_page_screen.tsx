import { observer } from "mobx-react-lite";
import { Icon } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { useEffect, useRef, useState } from "react";

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
        1
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
          backgroundColor: "grey",
        }}
      >
        <div
          ref={ref}
          style={{
            width: "100%",
            height: detailPageBackgroundHeight,
            backgroundColor: "red",
            overflow: "scroll",
            borderRadius: "40px 40px 0px 0px",
          }}
        >
          {["213"].repeat(19).map((el) => (
            <div
              style={{ width: "100%", height: 50, backgroundColor: "orange" }}
            >{el}</div>
          ))}
        </div>

        <div
          style={{
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: "white",
            width: 328,
            height: 56,
            marginLeft: 10,
            marginRight: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 28,
          }}
        >
          <Icon icon={"SmileFaceIcon"} />
          <Input initialValue={"Type message here..."} />
          <Icon icon={"PlaneIcon"} />
        </div>
      </div>
    </div>
  );
});
