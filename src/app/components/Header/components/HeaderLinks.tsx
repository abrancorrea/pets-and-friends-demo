"use client";
import { useEffect, useState } from "react";
import {
  StyledHeaderLink,
  StyledHeaderLinkContainer,
  StyledHeaderLinkMenu,
  StyledHeaderMenuButton,
} from "./styled";
import Icon from "@mdi/react";
import { mdiClose, mdiMenu } from "@mdi/js";

export const PAGE_LINKS_LIST = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "#",
  },
  {
    title: "explore",
    path: "#",
  },
  {
    title: "blog",
    path: "#",
  },
  {
    title: "contact",
    path: "#",
  },
];

export const HeaderLinks = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    const handleChangeResize = () => {
      setIsMobile(screen.width <= 768);
    };

    handleChangeResize();
    window.addEventListener("resize", handleChangeResize);

    return () => window.removeEventListener("resize", handleChangeResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <StyledHeaderMenuButton
            id="menu-button"
            onClick={() => setIsOpenMobileMenu((s) => !s)}
          >
            {!isOpenMobileMenu ? (
              <Icon path={mdiMenu} title="menu" size={1.5} color="white" />
            ) : (
              <Icon path={mdiClose} title="menu" size={1.5} color="white" />
            )}
          </StyledHeaderMenuButton>
          <StyledHeaderLinkMenu $show={isOpenMobileMenu}>
            {PAGE_LINKS_LIST.map((link) => (
              <StyledHeaderLink
                onClick={() => setIsOpenMobileMenu((s) => !s)}
                key={link.title}
                href={link.path}
                $menu
              >
                {link.title}
              </StyledHeaderLink>
            ))}
          </StyledHeaderLinkMenu>
        </>
      ) : (
        <StyledHeaderLinkContainer>
          {PAGE_LINKS_LIST.map((link) => (
            <StyledHeaderLink key={link.title} href={link.path}>
              {link.title}
            </StyledHeaderLink>
          ))}
        </StyledHeaderLinkContainer>
      )}
    </>
  );
};
