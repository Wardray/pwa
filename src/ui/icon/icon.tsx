export enum IconType {
  Square = "Square",
  Circle = "Circle",
}
interface IconProps {
  backgroundColor?: string;
  icon: string;
  type?: IconType;
  style?: React.CSSProperties;
  onClick?: Function;
  color?: string;
}
const getIcon = (icon: string, color?: string) => {
  switch (icon) {
    case "VerOnIcon":
      return (
        <svg
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.24764 15.7352C1.56079 12.7693 0.616599 9.40227 0.500391 5.95039C0.491353 5.68188 0.639671 5.43384 0.877299 5.30849L10.1665 0.408733C10.3752 0.298621 10.6248 0.298621 10.8335 0.408733L20.1227 5.30849C20.3603 5.43384 20.5087 5.68189 20.4996 5.95039C20.3834 9.40227 19.4392 12.7693 17.7524 15.7352C16.0647 18.7025 13.6914 21.1667 10.8573 22.8994C10.6379 23.0335 10.3622 23.0335 10.1427 22.8994C7.30857 21.1667 4.93527 18.7025 3.24764 15.7352Z"
            fill="#5A0FC8"
          />
          <path
            d="M6.92505 12.3877L9.78502 14.5326L15.505 8.81269"
            fill="#5A0FC8"
          />
          <path
            d="M6.92505 12.3877L9.78502 14.5326L15.505 8.81269"
            stroke="white"
            stroke-width="1.93048"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "LoginOffIcon":
      return (
        <svg
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.77778 17.4444V14.1111H0V9.66667H7.77778V6.33333L13.3333 11.8889L7.77778 17.4444ZM7.77778 0.777779H17.7778C18.3671 0.777779 18.9324 1.0119 19.3491 1.42865C19.7659 1.8454 20 2.41063 20 3V20.7778C20 21.3671 19.7659 21.9324 19.3491 22.3491C18.9324 22.7659 18.3671 23 17.7778 23H7.77778C7.18841 23 6.62318 22.7659 6.20643 22.3491C5.78968 21.9324 5.55556 21.3671 5.55556 20.7778V18.5556H7.77778V20.7778H17.7778V3H7.77778V5.22222H5.55556V3C5.55556 2.41063 5.78968 1.8454 6.20643 1.42865C6.62318 1.0119 7.18841 0.777779 7.77778 0.777779Z"
            fill="#3D3D3D"
          />
        </svg>
      );
    case "LineIcon":
      return (
        <svg
          width="175"
          height="2"
          viewBox="0 0 175 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="175" height="2" fill="#5A0FC8" />
        </svg>
      );
    case "NextIcon":
      return (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.75 3.75V14.25L8.75 9L2.75 3.75Z"
            stroke="white"
            stroke-width="1.58052"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 3.75V14.25L17 9L11 3.75Z"
            stroke="white"
            stroke-width="1.58052"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "PhoneIcon":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_19_682)">
            <path
              d="M27.4282 10.0783L27.3951 10.0576L23.2186 8L18.7107 14.0105L20.7847 16.776C20.7226 17.8189 20.2803 18.8029 19.5416 19.5416C18.8028 20.2804 17.8188 20.7227 16.7759 20.7847L14.0105 18.7107L8 23.2185L10.0405 27.3602L10.0577 27.3951L10.0784 27.4281C10.1872 27.6036 10.3392 27.7482 10.5198 27.8483C10.7005 27.9484 10.9037 28.0006 11.1102 28H12.1879C14.2644 28 16.3205 27.591 18.2389 26.7964C20.1573 26.0017 21.9005 24.837 23.3687 23.3687C24.837 21.9004 26.0017 20.1573 26.7964 18.2389C27.591 16.3205 28 14.2643 28 12.1878V11.1101C28.0007 10.9036 27.9485 10.7004 27.8484 10.5198C27.7483 10.3391 27.6036 10.1872 27.4282 10.0783ZM26.4566 12.1878C26.4566 20.0556 20.0556 26.4566 12.1879 26.4566H11.3158L9.95059 23.685L14.0107 20.6399L16.2712 22.3352H16.5284C18.0681 22.3335 19.5441 21.7211 20.6328 20.6325C21.7215 19.5438 22.3338 18.0677 22.3356 16.5281V16.2709L20.6403 14.0105L23.685 9.95054L26.4566 11.316V12.1878Z"
              fill="#3D3D3D"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_682">
              <rect width="36" height="36" rx="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "LoginOnIcon":
      return (
        <svg
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.77778 17.4444V14.1111H0V9.66667H7.77778V6.33333L13.3333 11.8889L7.77778 17.4444ZM7.77778 0.777779H17.7778C18.3671 0.777779 18.9324 1.0119 19.3491 1.42865C19.7659 1.8454 20 2.41063 20 3V20.7778C20 21.3671 19.7659 21.9324 19.3491 22.3491C18.9324 22.7659 18.3671 23 17.7778 23H7.77778C7.18841 23 6.62318 22.7659 6.20643 22.3491C5.78968 21.9324 5.55556 21.3671 5.55556 20.7778V18.5556H7.77778V20.7778H17.7778V3H7.77778V5.22222H5.55556V3C5.55556 2.41063 5.78968 1.8454 6.20643 1.42865C6.62318 1.0119 7.18841 0.777779 7.77778 0.777779Z"
            fill={color ?? "#5A0FC8"}
          />
        </svg>
      );
    case "VerIcon":
      return (
        <svg
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.24764 15.7352C1.56079 12.7693 0.616599 9.40227 0.500391 5.95039C0.491353 5.68188 0.639671 5.43384 0.877299 5.30849L10.1665 0.408733C10.3752 0.298621 10.6248 0.298621 10.8335 0.408733L20.1227 5.30849C20.3603 5.43384 20.5087 5.68189 20.4996 5.95039C20.3834 9.40227 19.4392 12.7693 17.7524 15.7352C16.0647 18.7025 13.6914 21.1667 10.8573 22.8994C10.6379 23.0335 10.3622 23.0335 10.1427 22.8994C7.30857 21.1667 4.93527 18.7025 3.24764 15.7352Z"
            fill={color ?? "#5A0FC8"}
          />
          <path
            d="M6.92506 12.3877L9.78503 14.5326L15.505 8.81269"
            fill={color ?? "#5A0FC8"}
          />
          <path
            d="M6.92506 12.3877L9.78503 14.5326L15.505 8.81269"
            stroke="white"
            stroke-width="1.93048"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
  }
  return <div>NotFoundIcon</div>;
};

export const Icon = (props: IconProps) => {
  let type = IconType.Square;
  if (props.type !== undefined) type = props.type;
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      style={Object.assign(
        {
          backgroundColor: props.backgroundColor,
          width: 50,
          height: 50,
          borderRadius: type === IconType.Square ? 15 : 100,
          textAlign: "center",
          alignContent: "center",
        },
        props.style
      )}
    >
      {getIcon(props.icon, props.color)}
    </div>
  );
};
