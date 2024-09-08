import { useState } from "react";
import { Icon } from "../icon/icon";
import { Typography, StrokePanel } from "../typography/typography";

interface AuthPageProps {
  bottomText: React.ReactNode;
  bodyChild: React.ReactNode;
  topChild: React.ReactNode;
  activePage: string;
}

export const AuthPage = (props: AuthPageProps) => {
  const [activePage, setActivePage] = useState<string>(props.activePage);
  return (
    <div>
      <div>{props.topChild}</div>
      <div
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => setActivePage("Login")}
          style={{ width: "100%", marginLeft: 20 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              color={activePage === "Login" ? "#5A0FC8" : "#3D3D3D"}
              icon={"LoginOnIcon"}
            />
            <Typography
              text={" Login"}
              fontSize={14}
              strokePanel={StrokePanel.Regular}
              color={"black"}
            />
          </div>
          <div
            style={{
              height: 2,
              width: "100%",
              backgroundColor: activePage === "Login" ? "#5A0FC8" : undefined,
            }}
          ></div>
        </div>
        <div
          onClick={() => setActivePage("Verification")}
          style={{ width: "100%", marginRight: 20 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              color={activePage === "Verification" ? "#5A0FC8" : "#3D3D3D"}
              icon={"VerIcon"}
            />
            <Typography
              text={"Verification"}
              fontSize={14}
              strokePanel={StrokePanel.Regular}
              color={"black"}
            />
          </div>
          <div
            style={{
              height: 2,
              width: "100%",
              backgroundColor:
                activePage === "Verification" ? "#5A0FC8" : undefined,
            }}
          ></div>
        </div>
      </div>
      <div>{props.bodyChild}</div>
      <div>{props.bottomText}</div>
    </div>
  );
};
