import { useState } from "react";
import { Icon } from "../icon/icon";
import { Typography, StrokePanel } from "../typography/typography";

interface AuthPageProps {
  bottomText: React.ReactNode;
  bodyChildLeftPage?: React.ReactNode;
  bodyChildRightPage?: React.ReactNode;
  topChild: React.ReactNode;
  activePage: Pages;
}
export enum Pages {
  Verification = "Verification",
  Login = "Login",
}

export const AuthPage = (props: AuthPageProps) => {
  const [activePage, setActivePage] = useState<Pages>(props.activePage);
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
          onClick={() => setActivePage(Pages.Login)}
          style={{ width: "100%", marginLeft: 20 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              color={activePage ===  Pages.Login ? "#5A0FC8" : "#3D3D3D"}
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
              backgroundColor: activePage === Pages.Login ? "#5A0FC8" : undefined,
            }}
          ></div>
        </div>
        <div
          onClick={() => setActivePage(Pages.Verification)}
          style={{ width: "100%", marginRight: 20 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              color={activePage === Pages.Verification ? "#5A0FC8" : "#3D3D3D"}
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
                activePage === Pages.Verification ? "#5A0FC8" : undefined,
            }}
          ></div>
        </div>
      </div>
      <div>
        {activePage === Pages.Verification  ? props.bodyChildLeftPage : undefined}
        {activePage === Pages.Login  ? props.bodyChildRightPage : undefined}
      </div>
      <div>{props.bottomText}</div>
    </div>
  );
};
