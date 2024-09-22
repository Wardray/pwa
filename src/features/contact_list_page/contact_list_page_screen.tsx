import { observer } from "mobx-react-lite";
import { Message } from "./message";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { Input } from "../../core/ui/input/input";
import { Icon } from "../../core/ui/icon/icon";
import { useNavigate } from "react-router-dom";
import { DetailPagePath } from "../detail_page/detail_page_screen";

export const ContactListPagePath = "/contactList";
export const ContactListPageScreen = observer(() => {
  const navigate = useNavigate();
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
      <div style={{ width: "100%" }}>
        <div
          style={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            width: "100%",
            height: 155,
            backgroundColor: "#7B3FD3",
          }}
        >
          <Typography
            style={{ marginLeft: 40 }}
            text={"Progressive Web App"}
            fontSize={24}
            strokePanel={StrokePanel.Regular}
            color={"white"}
          />
          <div
            style={{
              marginTop: 20,
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
            <Icon icon={"SearchIcon"} />
            <Input initialValue={"Search"} />
            <Icon icon={"AvatarIcon"} />
          </div>
        </div>
      </div>
      <div style={{marginTop: 20, height: "100%", width: "100%" }}>
        {[""].repeat(100).map((el) => (
          <Message onClick={() => navigate("/detailPage")} />
        ))}
      </div>
    </div>
  );
});
