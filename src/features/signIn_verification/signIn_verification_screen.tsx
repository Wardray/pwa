import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Button } from "../../core/ui/button/button";
import { Icon } from "../../core/ui/icon/icon";
import { Input } from "../../core/ui/input/input";
import { Typography, StrokePanel } from "../../core/ui/typography/typography";
import { ContactListPagePath } from "../contact_list_page/contact_list_page_screen";

export const SignInVerificationPath = "/SignInVerification";
export const SignInVerificationScreen = observer(() => {
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
          text={"SignIn on your account"}
        />

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
          <div style={{ display: "flex", marginLeft: 60 }}>
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
        <div
          style={{
            display: "flex",
            border: "1px solid #3D3D3D",
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Icon icon={"PhoneIcon"} />
          <Input initialValue={"Enter Verification Number..."} />
        </div>
        <div style={{ marginLeft: 86, marginTop: 50 }}>
          <Button
            onClick={() => navigate(ContactListPagePath)}
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
            Did not recive code? <a href="/SignInPages">TryAgain</a>
          </p>
        </div>
      </div>
    </div>
  );
});
