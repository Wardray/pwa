import { observer } from "mobx-react-lite";

export const SplashPath = "/Splash";
export const SplashScreen = observer(() => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/MoC0eOP-qa4.png`}
        alt="Splash Image"
      />
    </div>
  );
});
