import { useState, useEffect } from "react";
import { MenuToggle, MenuToggleSpan } from "../../styles";

import { StyledContent, StyledOverlay, StyledTitle } from "./styles";
import { SideSheetProps } from "./types";
import { createPortal } from "react-dom";
import Link from "next/link";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  const close = () => {
    setAnimationOff(true);
    document.body.style.overflow = "unset";

    setTimeout(() => onClose(), 295);
  };

  return createPortal(
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
        <ul className="flex flex-col gap-4 mt-4">
          <li onClick={close}>
            <Link href={"/"} passHref>
              <a className="text-[1.1rem] duration-200 ">Home</a>
            </Link>
          </li>
          <li onClick={close}>
            <Link href={"/"} passHref>
              <a className="text-[1.1rem] duration-200 ">Explore</a>
            </Link>
          </li>
          <li onClick={close}>
            <Link href={"/prestador/login"} passHref>
              <a className="text-[1.1rem] duration-200 ">Cuidadores</a>
            </Link>
          </li>
          <li onClick={close}>
            <Link href={"/"} passHref>
              <a className="text-[1.1rem] duration-200 ">Parceiros</a>
            </Link>
          </li>
        </ul>
      </StyledContent>
    </>,
    document.body
  );
};

export default SideSheet;
