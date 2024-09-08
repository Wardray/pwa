import { observer } from "mobx-react-lite";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { StrokePanel, Typography } from "../../ui/typography/typography";
import { Icon } from "../../ui/icon/icon";
import { useNavigate } from "react-router-dom";
import { SignInPagesPath } from "../signIn_pages/signIn_pages_screen";

export const LoginVerificationPath = "/LoginVerification";
export const LoginVerificationScreen = observer(() => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: 850,
        width: 415,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "center", width: 415 }}>
          <img src={`${process.env.PUBLIC_URL}/rDwSixsoQ0Q.jpg`} alt="PWA" />
        </div>
      </div>

      <div>
        <Typography
          fontSize={24}
          strokePanel={StrokePanel.UltraBold}
          color={"black"}
          text={"Login on your account"}
        />

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <Icon icon={"LoginOffIcon"} />
          </div>

          <div style={{ marginTop: 17 }}>
            <Typography
              text={"Login"}
              fontSize={14}
              strokePanel={StrokePanel.Regular}
              color={"black"}
            />
          </div>
          <div
            style={{ display: "flex", marginLeft: 60, flexDirection: "column" }}
          >
            <div style={{ display: "flex" }}>
              <Icon icon={"VerOnIcon"} />

              <div style={{ marginTop: 17 }}>
                <Typography
                  text={"Verification"}
                  fontSize={14}
                  strokePanel={StrokePanel.Regular}
                  color={"black"}
                />
              </div>
            </div>

            <Icon icon={"LineIcon"} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid #3D3D3D",
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Icon icon={"PhoneIcon"} />
          <Input label={"Verification"} initialValue={"+43 123-456-7890"} />
        </div>
        <div style={{ marginLeft: 86, marginTop: 50 }}>
          <Button
            onClick={() => navigate(SignInPagesPath)}
            icon={"NextIcon"}
            background={"#5A0FC8"}
            width={139}
            height={40}
            text={"Login"}
          />
        </div>
      </div>
      <div>
        <div className="footer">
          <div>
            Did not recive code? <a href="/LogInPages">TryAgain</a>
          </div>
        </div>
      </div>
    </div>
  );
});
