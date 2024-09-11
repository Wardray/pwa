import { observer } from "mobx-react-lite";
import { Button } from "../../core/ui/button/button";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";
import { relative } from "path";
import { SignInVerificationPath } from "../signIn_verification/signIn_verification_screen";

export const SignInPagesPath = "/SignInPages";
export const SignInPagesScreen = observer(() => {
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
      <div style={{ display: "flex", justifyContent: "center", width: 415 }}>
        <img src={`${process.env.PUBLIC_URL}/4Wc78ieAeqI.PNG`} alt="PWA" />
      </div>
      <div
        style={{
          position: "relative",
          marginRight: 100,
          width: 120,
          height: 120,
          borderRadius: 100,
          backgroundColor: "black",
        }}
      >
        <img
          style={{ width: 120, height: 120 }}
          src={`${process.env.PUBLIC_URL}/76Emh7oJCGk.png`}
          alt=""
        />
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Icon icon={"LoginOnIcon"} />
            <Icon icon={"LineIcon"} />
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
              <Icon icon={"VerIcon"} />

              <div style={{ marginTop: 17 }}>
                <Typography
                  text={"Verification"}
                  fontSize={14}
                  strokePanel={StrokePanel.Regular}
                  color={"black"}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 5,
            display: "flex",
            border: "1px solid #3D3D3D",
            borderRadius: 6,
          }}
        >
          <Input label={"Phone Number"} initialValue={"Enter full name..."} />
        </div>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            border: "1px solid #3D3D3D",
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Icon icon={"PhoneIcon"} />
          <Input initialValue={"+43 123-456-7890"} />
        </div>
        <div style={{ marginLeft: 86, marginTop: 50 }}>
          <Button
            onClick={() => navigate(SignInVerificationPath)}
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
          <p>
            You Have Account? <a href="/LogInPages">LogIn</a>
          </p>
        </div>
      </div>
    </div>
  );
});
