import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledHeaderContainer = styled.header<{ $showMenu?: boolean }>`
  height: 75px;
  background-color: transparent;
  padding: 0.5rem 5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  max-width: 1441px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 2rem;
  }
`;

export const StyledLogoContainer = styled(Link)`
  display: inline-block;
  width: fit-content;
  height: 100%;
  text-align: center;

  & img {
    display: inline-block;
    width: auto;
    height: 100%;
  }
`;

export const StyledHeaderLinkContainer = styled.div`
  width: 45%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-grow: 1;
    padding: 0 1rem;
  }
`;

export const StyledHeaderLink = styled(Link)<{ $menu?: boolean }>`
  color: var(--color-primary);
  font-size: 14px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  ${
    // TODO: fix this type error
    // @ts-ignore
    ($menu) =>
      $menu &&
      css`
        display: flex;
        padding: 0 2rem;
        align-items: center;
        font-size: 20px;
        height: 50px;
      `
  }
`;

export const StyledHeaderMenuButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const StyledHeaderLinkMenu = styled.div<{ $show?: boolean }>`
  position: fixed;
  top: 75px;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem 0;
  display: ${({ $show }) => ($show ? "block" : "none")};
  background-color: white;
  transition: display ease-in 2s;
`;
