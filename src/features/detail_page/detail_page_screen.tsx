import { observer } from "mobx-react-lite";
import { Icon } from "../../ui/icon/icon";
import { Input } from "../../ui/input/input";

export const DetailPagePath = "/detailPage";
export const DetailPageScreen = observer(() => {
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
          style={{
            marginTop: 60,
            width: "95%",
            height: 600,
            backgroundColor: "red",
            overflow: "scroll",
          }}
        >
          {[""].repeat(19).map((el) => (
            <div
              style={{ width: "100%", height: 50, backgroundColor: "orange" }}
            ></div>
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
