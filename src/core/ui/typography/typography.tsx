export enum StrokePanel {
  Regular = "Regular",
  UltraBold = "UltraBold",
}
interface IPropsText {
  fontSize: number;
  strokePanel: StrokePanel;
  color: string;
  text?: string | number;
  style?: React.CSSProperties;
  contentEditable?: boolean;
  onClick?: Function;
  onChange?: (text: string) => void;
}

export const Typography = (props: IPropsText) => {
  return (
    <div
      onInput={(event) => {
        if (props.onChange) {
          // @ts-expect-error
          props.onChange(event.target.innerText);
        }
      }}
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      suppressContentEditableWarning={true}
      contentEditable={props.contentEditable ? "true" : "false"}
      style={Object.assign(
        {
          textTransform: "uppercase",
          fontFamily: "Sora, sans-serif",
          fontSize: props.fontSize,
          color: props.color,
        },
        props.style
      )}
    >
      {props.text}
    </div>
  );
};
