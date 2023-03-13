import { PropsWithChildren, useState } from 'react';

interface BackgroundProps extends PropsWithChildren {
  isPointer: boolean;
  color: string;
}

export const HoverBackground = function (props: BackgroundProps) {
  const [isHover, setHover] = useState(false);
  const pointer = props.isPointer ? 'pointer' : undefined;

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      style={{
        backgroundColor: isHover ? props.color : undefined,
        cursor: isHover ? pointer : undefined,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </div>
  );
};

HoverBackground.defaultProps = {
  isPointer: false,
  color: undefined,
};
