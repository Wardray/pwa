import { observer } from "mobx-react-lite";
import { Icon } from "../../core/ui/icon/icon";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { Input } from "../../core/ui/input/input";
import { Button } from "../../core/ui/button/button";
import { Message } from "../contact_list_page/message";
import { Contact } from "./contact";

export const AddContactsScreenPath = "/addContacts";
export const AddContactsScreen = observer(() => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 64,
          backgroundColor: "#7B3FD3",
          display: "flex",
        }}
      >
        <Icon icon={"BackIcon"} />
        <Typography
          style={{ marginTop: 11 }}
          text={"Add Contacts"}
          fontSize={22}
          strokePanel={StrokePanel.Regular}
          color={"white"}
        />
      </div>
      <div>
        {" "}
        <div
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 40,
            display: "flex",
            border: "1px solid #3D3D3D",
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Icon icon={"PhoneIcon"} />
          <Input label={"Phone Number"} initialValue={"+43 123-456-7890"} />
        </div>
        <div style={{ marginTop: 30, marginLeft: 110 }}>
          <Button
            background={"#5A0FC8"}
            width={152}
            height={40}
            text={" + Add Contacts"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          boxShadow: "0 0 8px #555",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "30px 30px 0px 0px",
          height: 500,
          width: "100%",
          background: "#EFE7FA",
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: 150,
            height: 8,
            backgroundColor: "#636363",
            borderRadius: 24,
          }}
        ></div>
        <Typography
          fontSize={20}
          strokePanel={StrokePanel.Regular}
          color={"#7B3FD3"}
          text={"existing contact in Phone"}
        />
        <div>
          <div style={{ height: "100%", width: "100%" }}>
            {[""].repeat(4).map((el) => (
              <Contact onClick={() => console.log(200)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
