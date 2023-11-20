"use client";

import Image from "next/image";
import { StyledHeaderContainer } from "./components";
import Logo from "@/assets/img/logo.png";
import LogoSmall from "@/assets/img/logo-small.png";
import {
  StyledHeaderLink,
  StyledHeaderLinkContainer,
  StyledLogoContainer,
} from "./components";
import { HeaderLinks } from "./components/HeaderLinks";

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer href="/">
        <Image src={Logo} alt="pet-and-friends-logo" />
      </StyledLogoContainer>
      <HeaderLinks />
    </StyledHeaderContainer>
  );
};
