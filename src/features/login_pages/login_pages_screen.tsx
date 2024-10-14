import { observer } from "mobx-react-lite";
import { Button } from "../../core/ui/button/button";
import { Input } from "../../core/ui/input/input";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { Icon } from "../../core/ui/icon/icon";
import { useNavigate } from "react-router-dom";
import { AuthPage, Pages } from "../../core/ui/pages/auth_page";
import { SignInPagesPath } from "../signIn_pages/signIn_pages_screen";
import { LoginStore } from "./login_store";
import { useStore } from "../../core/helper/use_store";

export const LoginPagesPath = "/loginPages";
export const LoginPagesScreen = observer(() => {
  const navigate = useNavigate();
  const store = useStore(LoginStore);
  return (
    <AuthPage
      bottomText={
        <>
          <div
            style={{
              marginTop: 160,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              text={"Don’t Have Account?"}
              fontSize={12}
              strokePanel={StrokePanel.Regular}
              color={"black"}
            />
            <Typography
              text={" SignIn"}
              fontSize={12}
              strokePanel={StrokePanel.Regular}
              color={"purple"}
            />
          </div>
        </>
      }
      bodyChildLeftPage={
        <>
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
            <Input
              onChange={(text) => store.updateForm({ username: text })}
              label={"Login"}
              initialValue={"..."}
            />
          </div>
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
            <Input
              onChange={(text) => store.updateForm({ password: text })}
              label={"Password"}
              initialValue={"..."}
            />
          </div>
          <div style={{ marginLeft: 110, marginTop: 50 }}>
            <Button
              onClick={() => store.login()}
              icon={<Icon icon={"NextIcon"} />}
              background={"#5A0FC8"}
              width={139}
              height={40}
              text={"Login"}
            />
          </div>
        </>
      }
      bodyChildRightPage={
        <>
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
            <Input
              onChange={(text) => store.updateForm({ username: text })}
              label={"Login"}
              initialValue={"..."}
            />
          </div>
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
            <Input
              onChange={(text) => store.updateForm({ password: text })}
              label={"Pass"}
              initialValue={"..."}
            />
          </div>
          <div style={{ marginLeft: 110, marginTop: 50 }}>
            <Button
              onClick={() => store.register()}
              icon={"LoginOnIcon"}
              background={"#5A0FC8"}
              width={139}
              height={40}
              text={"Login"}
            />
          </div>
        </>
      }
      topChildLeft={
        <>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/rDwSixsoQ0Q.jpg`}
                alt="PWA"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div style={{ height: 40 }} />
          <Typography
            style={{ paddingLeft: 30 }}
            fontSize={24}
            strokePanel={StrokePanel.UltraBold}
            color={"black"}
            text={"Login on your account"}
          />
          <div style={{ height: 20 }} />
        </>
      }
      topChildRight={
        <>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/rDwSixsoQ0Q.jpg`}
                alt="PWA"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div style={{ height: 40 }} />
          <Typography
            style={{ paddingLeft: 30 }}
            fontSize={24}
            strokePanel={StrokePanel.UltraBold}
            color={"black"}
            text={"Login on your account"}
          />
          <div style={{ height: 20 }} />
        </>
      }
      activePage={Pages.Login}
    />
  );
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
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Icon icon={"PhoneIcon"} />
          <Input label={"Phone Number"} initialValue={"+43 123-456-7890"} />
        </div>
        <div style={{ marginLeft: 86, marginTop: 50 }}>
          <Button
            icon={"NextIcon"}
            background={"#5A0FC8"}
            width={139}
            height={40}
            text={"Next Step"}
          />
        </div>
      </div>
      <div>
        <div className="footer">
          <p>
            Don’t Have Account? <a href="/SignInPages">SignIn</a>
          </p>
        </div>
      </div>
    </div>
  );
});
