import { useState, useEffect } from "react";
import { MenuToggle, MenuToggleSpan } from "../../styles";

import { StyledContent, StyledOverlay, StyledTitle } from "./styles";
import { SideSheetProps } from "./types";

const SideSheet = ({
  children,
  title,
  onClose,
  overlay,
  isOpen,
}: SideSheetProps) => {
  const [animationOff, setAnimationOff] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setAnimationOff(false);
    }
  }, [isOpen]);

  const close = () => {
    setAnimationOff(true);
    setTimeout(() => onClose(), 295);
  };

  return (
    <>
      {/* overlay */}
      {overlay && <StyledOverlay onClick={close} disappear={animationOff} />}

      {/* content */}
      <StyledContent disappear={animationOff}>
        <div className="flex items-center justify-between">
          <MenuToggle onClick={close}>
            <MenuToggleSpan checked={true}></MenuToggleSpan>
            <MenuToggleSpan checked={true}></MenuToggleSpan>
            <MenuToggleSpan checked={true}></MenuToggleSpan>
          </MenuToggle>
          <StyledTitle>{title ?? ``}</StyledTitle>
          {/* <IconButton onClick={close}>X</IconButton> */}
        </div>
        {children}
      </StyledContent>
    </>
  );
};

export default SideSheet;
