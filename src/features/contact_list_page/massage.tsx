interface IPropsMassage {
  background: string;
  width: number;
  height: number;
  text: string;
  textPadding?: number;
  onClick?: Function;
  child?: React.ReactNode;
  icon?: React.ReactNode;
}
export const Massage = (props: IPropsMassage) => {
  return <div></div>;
};
