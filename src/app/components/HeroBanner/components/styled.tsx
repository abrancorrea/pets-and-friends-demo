"use client";

import Image from "next/image";
import styled, { css } from "styled-components";
import { SwiperSlide } from "swiper/react";

export const StyledContainer = styled.div`
  width: 100%;
  max-height: 800px;
  height: 100vh;

  & > div {
    height: 100%;
    width: 100%;
  }

  & .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: solid 1px var(--color-primary) !important;
    background: transparent !important;
    border-radius: 100%;
    margin: 10px;
    opacity: 1;

    &.swiper-pagination-bullet-active {
      background-color: var(--color-primary) !important;
    }
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  background: radial-gradient(
    closest-side,
    var(--dark-basic),
    var(--dark-basic),
    #191313
  );
`;

export const StyledBanner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 3.5rem 2rem 10rem;
  }

  @media (min-width: 1441px) {
    max-width: 1441px;
  }
`;

export const StyledBgImage = styled(Image)`
  height: 30%;
  object-position: bottom right;
  bottom: 0;
  position: absolute;
  right: 0;
  object-fit: contain;
  z-index: 1;
  width: 100%;
  @media (min-width: 426px) {
    width: 80%;
    height: 40%;
  }

  @media (min-width: 769px) {
    width: 70%;
    height: 60%;
  }
  @media (min-width: 1025px) {
    height: 90%;
  }
  @media (min-width: 1441px) {
    width: auto;
  }
`;

export interface StyledColumnProps {
  $overImage?: boolean;
  $position: "left" | "right";
  $width: string;
}

export const StyledColumn = styled.div<StyledColumnProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ $overImage }) =>
    $overImage &&
    css`
      z-index: 2;
    `}

  @media (min-width: 769px) {
    width: ${({ $width }) => $width};
    padding: ${({ $position }) => ($position === "left" ? "0 0 0 5rem" : "0 5rem 0 0")};
  }
`;

export const StyledTextAndCTAContainer = styled.div`
  align-self: flex-start;
`;

export const StyledDiplay1 = styled.h1`
  font-size: 90px;
  text-transform: uppercase;
  color: white;
  line-height: 1;
  @media (min-width: 769px) {
    font-size: 11vw;
  }
  @media (min-width: 1244px) {
    font-size: 10rem;
  }
`;

export const StyledDiplay2 = styled.h2`
  text-transform: uppercase;
  font-size: 55px;
  color: white;
  line-height: 1;
  font-weight: 100;

  @media (min-width: 769px) {
    font-size: 7vw;
  }

  @media (min-width: 1244px) {
    font-size: 6rem;
  }
`;

export const StyledCTA = styled.button`
  background-color: transparent;
  width: 250px;
  height: 60px;
  border: solid 2px var(--color-primary);
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--color-primary);
  margin: 3rem 0;
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    background-color: var(--color-primary);
    color: var(--dark-basic);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const StyledSocialLinksContainer = styled.div`
  width: fit-content;
  margin-left: auto;

  @media (max-width: 768px) {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledSocialLinks = styled.a`
  display: block;
  margin: 1rem auto;
  transition: transform ease-in 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const StyledPetInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 50px 0;
`;

export const StyledPetInfoBox = styled.div<{ $centerText?: boolean }>`
  ${({ $centerText }) =>
    $centerText &&
    css`
      text-align: center;
    `}

  & h5 {
    color: white;
    font-size: 3rem;
    margin-bottom: 5px;

    @media (min-width: 769px) {
      font-size: 3.5vw;
    }

    @media (min-width: 1244px) {
      font-size: 2rem;
    }
  }

  & svg {
    width: 4.2rem;
    height: 4.2rem;

    @media (min-width: 769px) {
      width: 4.8vw;
      height: 4.8vw;
    }

    @media (min-width: 1244px) {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  & p {
    font-family: sans-serif;
    color: var(--secondary-text);
    text-transform: capitalize;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 50px;
  font-family: sans-serif;
  font-weight: lighter;
  line-height: 1.5;
  color: var(--secondary-text);
`;

export const StyledAdoptMeCTA = styled.button`
  background: #ffff01;
  color: var(--dark-basic);
  width: 250px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    background: #ffff5f;
  }

  &:active {
    transform: scale(0.9);
  }
`;
